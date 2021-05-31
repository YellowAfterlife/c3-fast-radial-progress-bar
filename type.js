"use strict";
{
	const SDK = self.SDK;
	const BEHAVIOR_CLASS = SDK.Behaviors.YellowAfterlife_FastRadialProgressBar;
	
	BEHAVIOR_CLASS.Type = class FastRadialProgressBarType extends SDK.IBehaviorTypeBase {
		constructor(sdkPlugin, iBehaviorType) {
			super(sdkPlugin, iBehaviorType);
		}
	};
}