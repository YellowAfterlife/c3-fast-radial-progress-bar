"use strict";
{
	const C3 = self.C3;

	C3.Behaviors.YellowAfterlife_FastRadialProgressBar.Instance = class FastRadialProgressBarInstance extends C3.SDKBehaviorInstanceBase
	{
		constructor(behInst, properties) {
			super(behInst);
			
			this.needsRedraw = true;
			if (properties) {
				this.value = properties[0];
				this.maxValue = properties[1];
			} else {
				this.value = 0;
				this.maxValue = 100;
			}
			
			this._StartTicking();
		}
		
		Release() {
			super.Release();
		}
		
		SaveToJson() {
			return {
				value: this.value,
				maxValue: this.maxValue,
			}
		}
		
		LoadFromJson(json) {
			this.value = json.value;
			this.maxValue = json.maxValue;
		}
		
		setValue(name, val) {
			if (this[name] === val) return;
			this[name] = val;
			this.needsRedraw = true;
		}
		
		Tick() {
			if (!this.needsRedraw) return;
			this.needsRedraw = false;
			
			const worldInfo = this._inst.GetWorldInfo();
			const val = Math.max(0, Math.min(1, this.value / this.maxValue));
			const hsize = 2 + Math.max(0, Math.ceil((val - 1/8) / (2/8)));
			if (!worldInfo.HasMesh() || (worldInfo._meshInfo.sourceMesh._hsize != hsize)) {
				worldInfo.CreateMesh(hsize, 2);
			}
			
			let bboxChanged = false;
			const smp = (i, k, x, y) => {
				if (worldInfo.SetMeshPoint(i, k, {
					x: x, y: y, u: x, v: y
				})) bboxChanged = true;
			}
			
			smp(0, 0, 0.5, 0); // top-left
			
			// corner points if we're passing them:
			if (val > 1/8) smp(1, 0, 1, 0);
			if (val > 3/8) smp(2, 0, 1, 1);
			if (val > 5/8) smp(3, 0, 0, 1);
			if (val > 7/8) smp(4, 0, 0, 0);
			
			// final point:
			let curAngle = Math.PI * (val * 2 - 0.5);
			let curAngleX = Math.cos(curAngle);
			let curAngleY = Math.sin(curAngle);
			let curAngleMax = Math.max(Math.abs(curAngleX), Math.abs(curAngleY));
			if (curAngleMax < 1) {
				curAngleX /= curAngleMax;
				curAngleY /= curAngleMax;
			}
			smp(hsize - 1, 0, (curAngleX + 1) / 2, (curAngleY + 1) / 2);
			
			// snap the rest of the points to center:
			for (var i = 0; i < hsize; i++) smp(i, 1, 0.5, 0.5);
			
			if (bboxChanged) worldInfo.SetBboxChanged();
		}
		
		GetDebuggerProperties() {
			return [{
				title: "Fast Radial Progress Bar",
				properties: [
					{ name: "Value", value: this.value, onedit: v => this.setValue("value", v) },
					{ name: "Max Value", value: this.maxValue, onedit: v => this.setValue("maxValue", v) },
				]
			}]
		}

		// timeline support
		GetPropertyValueByIndex(index) {
			switch (index) {
				case 0: return this.value;
				case 1: return this.maxValue;
			}
			return 0;
		}

		SetPropertyValueByIndex(index, value) {
			switch (index) {
				case 0: this.value = value; break;
				case 1: this.maxValue = value; break;
			}
		}
	};
}