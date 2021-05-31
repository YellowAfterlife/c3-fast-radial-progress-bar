"use strict";
{
	const SDK = self.SDK;

	const BEHAVIOR_ID = "YellowAfterlife_FastRadialProgressBar";	
	const BEHAVIOR_VERSION = "1.0.0.1";
	const BEHAVIOR_CATEGORY = "general";
	
	const BEHAVIOR_CLASS = class RadialProgressBehavior extends SDK.IBehaviorBase {
		constructor() {
			super(BEHAVIOR_ID);
			
			SDK.Lang.PushContext("behaviors." + BEHAVIOR_ID.toLowerCase());
			
			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(BEHAVIOR_VERSION);
			this._info.SetCategory(BEHAVIOR_CATEGORY);
			this._info.SetAuthor("YellowAfterlife");
			this._info.SetHelpUrl("https://yal.cc/c3-radial-progress-bar");
			this._info.SetIsOnlyOneAllowed(true);
			this._info.SetCanBeBundled(true);

			this._info.SetSupportedRuntimes(["c3"]);
			
			SDK.Lang.PushContext(".properties");
	
			this._info.SetProperties([
				new SDK.PluginProperty("float", "value", 50, { "interpolatable": true }),
				new SDK.PluginProperty("float", "maxValue", 100, { "interpolatable": true }),
			]);
			
            SDK.Lang.PopContext(); //.properties
			SDK.Lang.PopContext();
		}
	};
	SDK.Behaviors.YellowAfterlife_FastRadialProgressBar = BEHAVIOR_CLASS;
	
	BEHAVIOR_CLASS.Register(BEHAVIOR_ID, BEHAVIOR_CLASS);
}