export interface Entity {
	entity_id: string;
	state: string;
	attributes: Attributes;
	last_changed: Date;
	last_reported: Date;
	last_updated: Date;
	context: Context;
}

export interface Attributes {
	editable?: boolean;
	id?: string;
	device_trackers?: string[];
	latitude?: number;
	longitude?: number;
	gps_accuracy?: number;
	source?: string;
	user_id?: string;
	friendly_name?: string;
	entity_id?: string[];
	icon?: string;
	min_color_temp_kelvin?: number;
	max_color_temp_kelvin?: number;
	min_mireds?: number;
	max_mireds?: number;
	supported_color_modes?: ColorMode[];
	color_mode?: ColorMode | null;
	brightness?: number | null;
	color_temp_kelvin?: number | null;
	color_temp?: number | null;
	hs_color?: number[] | null;
	rgb_color?: number[] | null;
	xy_color?: number[] | null;
	supported_features?: number;
	effect_list?: string[];
	effect?: null;
	initial?: null;
	min?: number;
	max?: number;
	step?: number;
	mode?: Mode;
	unit_of_measurement?: string;
	radius?: number;
	passive?: boolean;
	persons?: string[];
	next_dawn?: Date;
	next_dusk?: Date;
	next_midnight?: Date;
	next_noon?: Date;
	next_rising?: Date;
	next_setting?: Date;
	elevation?: number;
	azimuth?: number;
	rising?: boolean;
	device_class?: string;
	has_date?: boolean;
	has_time?: boolean;
	hour?: number;
	minute?: number;
	second?: number;
	timestamp?: number;
	source_type?: string;
	'Fast User Switched'?: boolean;
	Idle?: boolean;
	Locked?: boolean;
	'Screen Off'?: boolean;
	Screensaver?: boolean;
	Sleeping?: boolean;
	Terminating?: boolean;
	'Battery Provides Time Remaining'?: boolean;
	BatteryHealth?: string;
	BatteryHealthCondition?: string;
	Current?: number;
	'Current Capacity'?: number;
	DesignCycleCount?: number;
	'Hardware Serial Number'?: string;
	'Is Charging'?: boolean;
	'Is Present'?: boolean;
	'LPM Active'?: boolean;
	'Max Capacity'?: number;
	Name?: string;
	'Optimized Battery Charging Engaged'?: boolean;
	'Power Source ID'?: number;
	'Power Source State'?: string;
	'Time to Empty'?: number;
	'Time to Full Charge'?: number;
	'Transport Type'?: string;
	Type?: string;
	'Low Power Mode'?: boolean;
	Available?: string;
	'Available (Important)'?: string;
	'Available (Opportunistic)'?: string;
	Total?: string;
	'Hardware Address'?: string;
	'Active Camera'?: any[];
	'All Camera'?: string[];
	'Active Audio Input'?: any[];
	'All Audio Input'?: string[];
	'Active Audio Output'?: any[];
	'All Audio Output'?: string[];
	'Display IDs'?: string[];
	'Display Names'?: string[];
	'Bundle Identifier'?: string;
	'Is Hidden'?: boolean;
	'Launch Date'?: Date;
	'Owns Menu Bar'?: boolean;
	'Allows VoIP'?: boolean;
	'Carrier ID'?: string;
	'Carrier Name'?: string;
	'ISO Country Code'?: string;
	'Mobile Country Code'?: string;
	'Mobile Network Code'?: string;
	battery_level?: number;
	altitude?: number;
	vertical_accuracy?: number;
	'Current Radio Technology'?: string;
	'Administrative Area'?: string;
	'Areas Of Interest'?: string;
	Country?: string;
	'Inland Water'?: string;
	Locality?: string;
	Location?: number[];
	Ocean?: string;
	'Postal Code'?: string;
	'Sub Administrative Area'?: string;
	'Sub Locality'?: string;
	'Sub Thoroughfare'?: string;
	Thoroughfare?: string;
	'Time Zone'?: string;
	Zones?: string[];
	temperature?: number | null;
	dew_point?: number;
	temperature_unit?: string;
	humidity?: number;
	cloud_coverage?: number;
	uv_index?: number;
	pressure?: number;
	pressure_unit?: string;
	wind_bearing?: number;
	wind_gust_speed?: number;
	wind_speed?: number;
	wind_speed_unit?: string;
	visibility_unit?: string;
	precipitation_unit?: string;
	attribution?: string;
	access_token?: string;
	width?: number;
	height?: number;
	fps?: number;
	bitrate?: number;
	channel_id?: number;
	entity_picture?: string;
	motion_detection?: boolean;
	frontend_stream_type?: string;
	options?: string[];
	state_class?: StateClass;
	auto_update?: boolean;
	installed_version?: string;
	in_progress?: boolean;
	latest_version?: null | string;
	release_summary?: null | string;
	release_url?: null | string;
	skipped_version?: null;
	title?: null;
	Count?: number;
	preset_modes?: null;
	percentage?: number;
	percentage_step?: number;
	preset_mode?: null;
	active?: boolean;
	color?: string;
	k_value?: number;
	name?: string;
	nozzle_temp_min?: string;
	nozzle_temp_max?: string;
	type?: string;
	modifier?: number;
	'AMS Slot 1'?: number;
	remain?: number;
	tag_uid?: string;
	tray_uuid?: string;
	hvac_modes?: string[];
	min_temp?: number;
	max_temp?: number;
	current_temperature?: number;
	hvac_action?: string;
	occupied_cooling_setpoint?: number;
	occupied_heating_setpoint?: number;
	system_mode?: string;
	unoccupied_heating_setpoint?: number;
	off_with_transition?: boolean;
	off_brightness?: number | null;
	battery_size?: string;
	battery_quantity?: number;
	battery_voltage?: number;
	measurement_type?: MeasurementType;
	device_type?: string;
	status?: string;
	zcl_unit_of_measurement?: number;
	last_triggered?: Date;
	current?: number;
	restored?: boolean;
	source_list?: string[];
}

export enum ColorMode {
	Brightness = 'brightness',
	ColorTemp = 'color_temp',
	Onoff = 'onoff',
	Xy = 'xy'
}

export enum MeasurementType {
	ActiveMeasurement = 'ACTIVE_MEASUREMENT',
	ActiveMeasurementPhaseAMeasurement = 'ACTIVE_MEASUREMENT, PHASE_A_MEASUREMENT'
}

export enum Mode {
	Auto = 'auto',
	Box = 'box',
	Single = 'single',
	Slider = 'slider'
}

export enum StateClass {
	Measurement = 'measurement',
	TotalIncreasing = 'total_increasing'
}

export interface Context {
	id: string;
	parent_id: null | string;
	user_id: null | string;
}
