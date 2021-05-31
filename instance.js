"use strict";
{
	const SDK = self.SDK;
	const BEHAVIOR_CLASS = SDK.Behaviors.YellowAfterlife_FastRadialProgressBar;
	
	BEHAVIOR_CLASS.Instance = class FastRadialProgressBarInstance extends SDK.IBehaviorInstanceBase {
		constructor(sdkBehType, behInst) {
			super(sdkBehType, behInst);
		}
		
		Release() { }
		
		OnCreate() { }
		
		OnPropertyChanged(id, value) { }
		
		LoadC2Property(name, valueString) { return false; }
	};
}