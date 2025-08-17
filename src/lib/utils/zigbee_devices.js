// TODO dynamically fetch this

const hassData = [
	{
		ieee: '00:21:2e:ff:ff:09:44:73',
		nwk: 0,
		manufacturer: 'dresden elektronik',
		model: 'Raspbee II',
		name: 'dresden elektronik Raspbee II',
		quirk_applied: false,
		quirk_class: 'zigpy_deconz.zigbee.application.DeconzDevice',
		quirk_id: null,
		manufacturer_code: 4405,
		power_source: 'Mains',
		lqi: 255,
		rssi: -55,
		last_seen: '2025-08-17T18:54:25',
		available: true,
		device_type: 'Coordinator',
		signature: {
			node_descriptor: {
				logical_type: 0,
				complex_descriptor_available: 0,
				user_descriptor_available: 1,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 15,
				manufacturer_code: 4405,
				maximum_buffer_size: 71,
				maximum_incoming_transfer_size: 43,
				server_mask: 64,
				maximum_outgoing_transfer_size: 43,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0400',
					input_clusters: ['0x0000', '0x0006', '0x000a', '0x0019', '0x0501'],
					output_clusters: ['0x0001', '0x0020', '0x0500', '0x0502']
				},
				2: {
					profile_id: '0xc05e',
					device_type: '0x0820',
					input_clusters: ['0x0000'],
					output_clusters: []
				}
			},
			manufacturer: 'dresden elektronik',
			model: 'Raspbee II'
		},
		active_coordinator: true,
		entities: [],
		neighbors: [
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'f8:44:77:ff:fe:f8:00:72',
				nwk: '0x86F4',
				permit_joining: 'NotAccepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '248'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '247'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:8f:f5:57',
				nwk: '0x2FE9',
				permit_joining: 'NotAccepting',
				depth: '1',
				lqi: '254'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '248'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:86:a5:a0',
				nwk: '0xECD6',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '196'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Accepting',
				depth: '1',
				lqi: '252'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'f8:44:77:ff:fe:f7:aa:7e',
				nwk: '0x109D',
				permit_joining: 'NotAccepting',
				depth: '1',
				lqi: '252'
			}
		],
		routes: [
			{
				dest_nwk: '0x782A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x782A'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x25A6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0xB3A7',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xD02A'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0x4BA1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x57D3'
			},
			{
				dest_nwk: '0xD02A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xD02A'
			},
			{
				dest_nwk: '0xECDB',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECDB'
			},
			{
				dest_nwk: '0xE737',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xE737'
			},
			{
				dest_nwk: '0x88AA',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x88AA'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x688C'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0xFEE1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFEE1'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x3CF1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3CF1'
			},
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5B5A'
			},
			{
				dest_nwk: '0x178B',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x3581',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3581'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x782A'
			},
			{
				dest_nwk: '0xA982',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3CF1'
			},
			{
				dest_nwk: '0x7C1F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0x4ACF',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFEE1'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0xEE1F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x7320'
			},
			{
				dest_nwk: '0xE000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xD02A'
			},
			{
				dest_nwk: '0x7777',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x7320',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x7320'
			},
			{
				dest_nwk: '0x57D3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x57D3'
			}
		],
		endpoint_names: [
			{
				name: 'IAS_CONTROL'
			},
			{
				name: 'CONTROLLER'
			}
		],
		user_given_name: null,
		device_reg_id: '485bae52aa803456d3613dec07009f77',
		area_id: 'kitchen'
	},
	{
		ieee: '84:ba:20:ff:fe:62:3c:df',
		nwk: 31775,
		manufacturer: 'IKEA of Sweden',
		model: 'Remote Control N2',
		name: 'IKEA of Sweden Remote Control N2',
		quirk_applied: true,
		quirk_class: 'zigpy.quirks.v2.CustomDeviceV2',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -54,
		last_seen: '2025-08-17T19:16:51',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0820',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0020', '0x1000', '0xfc57', '0xfc7c'],
					output_clusters: ['0x0003', '0x0005', '0x0006', '0x0008', '0x0019', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'Remote Control N2'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.switch_bathroom_hall_identify',
				name: 'IKEA of Sweden Remote Control N2'
			},
			{
				entity_id: 'sensor.switch_bathroom_hall_battery',
				name: 'IKEA of Sweden Remote Control N2'
			},
			{
				entity_id: 'update.switch_bathroom_hall_firmware',
				name: 'IKEA of Sweden Remote Control N2'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'NON_COLOR_CONTROLLER'
			}
		],
		user_given_name: 'Switch Bathroom Hall',
		device_reg_id: 'fda680f0b34a3e02ccb0bca9e84e768b',
		area_id: null
	},
	{
		ieee: '8c:6f:b9:ff:fe:b3:d8:60',
		nwk: 60959,
		manufacturer: 'IKEA of Sweden',
		model: 'RODRET Dimmer',
		name: 'IKEA of Sweden RODRET Dimmer',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.twobtnremote.IkeaRodretRemote2Btn',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -65,
		last_seen: '2025-08-17T19:24:26',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0820',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0020', '0x1000', '0xfc7c'],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0008', '0x0019', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'RODRET Dimmer'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.switch_living_room_identify',
				name: 'IKEA of Sweden RODRET Dimmer'
			},
			{
				entity_id: 'sensor.switch_living_room_battery',
				name: 'IKEA of Sweden RODRET Dimmer'
			},
			{
				entity_id: 'update.switch_living_room_firmware',
				name: 'IKEA of Sweden RODRET Dimmer'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'NON_COLOR_CONTROLLER'
			}
		],
		user_given_name: 'Switch Living Room',
		device_reg_id: '94b3c8d6d27f441c8cd6b24c782521c5',
		area_id: 'living_room'
	},
	{
		ieee: '84:b4:db:ff:fe:b5:7b:de',
		nwk: 22483,
		manufacturer: 'Sunricher',
		model: 'HK-SL-DIM-EU-A',
		name: 'Sunricher HK-SL-DIM-EU-A',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4107,
		power_source: 'Mains',
		lqi: 255,
		rssi: -64,
		last_seen: '2025-08-17T19:37:33',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4107,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0101',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x0702',
						'0x0b04',
						'0x0b05',
						'0x1000'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0066',
					input_clusters: ['0x0021'],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'Sunricher',
			model: 'HK-SL-DIM-EU-A'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.light_ceiling_bedroom_identify',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'light.light_ceiling_bedroom_light',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'number.light_ceiling_bedroom_on_off_transition_time',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'number.light_ceiling_bedroom_on_level',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'number.light_ceiling_bedroom_start_up_current_level',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'select.light_ceiling_bedroom_start_up_behavior',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'sensor.light_ceiling_bedroom_current',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'sensor.light_ceiling_bedroom_voltage',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'sensor.light_ceiling_bedroom_power',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'sensor.light_ceiling_bedroom_summation_delivered',
				name: 'Sunricher HK-SL-DIM-EU-A'
			},
			{
				entity_id: 'update.light_ceiling_bedroom_firmware',
				name: 'Sunricher HK-SL-DIM-EU-A'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '188'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '255'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '132'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '172'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '106'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '166'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '145'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '105'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '153'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:86:a5:a0',
				nwk: '0xECD6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '176'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '181'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '113'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '156'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '150'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '134'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:6f:b9:ff:fe:4e:3f:57',
				nwk: '0x4BA1',
				permit_joining: 'NotAccepting',
				depth: '2',
				lqi: '173'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x7E5D'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECD6'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x25A6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5B5A'
			},
			{
				dest_nwk: '0x3CF1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3CF1'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x502B'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x688C'
			}
		],
		endpoint_names: [
			{
				name: 'DIMMABLE_LIGHT'
			},
			{
				name: 'COMBO_BASIC'
			}
		],
		user_given_name: 'Light Ceiling Bedroom',
		device_reg_id: 'b6f58b57a54fa6c2b55f4dee1314e642',
		area_id: 'bedroom'
	},
	{
		ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
		nwk: 60635,
		manufacturer: 'IKEA of Sweden',
		model: 'TRADFRI bulb E27 WW 806lm',
		name: 'IKEA of Sweden TRADFRI bulb E27 WW 806lm',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -64,
		last_seen: '2025-08-17T19:36:20',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0101',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x1000',
						'0xfc7c'
					],
					output_clusters: ['0x0005', '0x0019', '0x0020', '0x1000']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRADFRI bulb E27 WW 806lm'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.light_window_wicker_identify',
				name: 'IKEA of Sweden TRADFRI bulb E27 WW 806lm'
			},
			{
				entity_id: 'light.light_window_wicker_light',
				name: 'IKEA of Sweden TRADFRI bulb E27 WW 806lm'
			},
			{
				entity_id: 'number.light_window_wicker_on_off_transition_time',
				name: 'IKEA of Sweden TRADFRI bulb E27 WW 806lm'
			},
			{
				entity_id: 'number.light_window_wicker_on_level',
				name: 'IKEA of Sweden TRADFRI bulb E27 WW 806lm'
			},
			{
				entity_id: 'number.light_window_wicker_start_up_current_level',
				name: 'IKEA of Sweden TRADFRI bulb E27 WW 806lm'
			},
			{
				entity_id: 'select.light_window_wicker_start_up_behavior',
				name: 'IKEA of Sweden TRADFRI bulb E27 WW 806lm'
			},
			{
				entity_id: 'update.light_window_wicker_firmware',
				name: 'IKEA of Sweden TRADFRI bulb E27 WW 806lm'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Parent',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '143'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '124'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '109'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '121'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '108'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '168'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '160'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '114'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '173'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '162'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '68'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '124'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '95'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '133'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '119'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '89'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x7E5D'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			}
		],
		endpoint_names: [
			{
				name: 'DIMMABLE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Light Window Wicker',
		device_reg_id: '096dcb4d198c10055771826cc0a74900',
		area_id: 'living_room'
	},
	{
		ieee: '1f:ff:00:01:00:00:00:82',
		nwk: 64384,
		manufacturer: 'NAMRON AS',
		model: '4512737',
		name: 'NAMRON AS 4512737',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4644,
		power_source: 'Mains',
		lqi: 255,
		rssi: -70,
		last_seen: '2025-08-17T19:37:25',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4644,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0301',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0009',
						'0x000a',
						'0x0201',
						'0x0204',
						'0x0702',
						'0x0b04'
					],
					output_clusters: []
				},
				2: {
					profile_id: '0x0104',
					device_type: '0x0007',
					input_clusters: ['0x0000', '0x0003'],
					output_clusters: ['0x0003', '0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'NAMRON AS',
			model: '4512737'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.thermostat_living_room_identify',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'climate.thermostat_living_room_thermostat',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'number.thermostat_living_room_local_temperature_offset',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'select.thermostat_living_room_keypad_lockout',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_living_room_current',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_living_room_voltage',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_living_room_power',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_living_room_summation_delivered',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_living_room_hvac_action',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_living_room_timestamp',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'update.thermostat_living_room_firmware',
				name: 'NAMRON AS 4512737'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Parent',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '168'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '116'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '149'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '176'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '160'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '169'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '175'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '90'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '134'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '197'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '156'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '159'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:86:a5:a0',
				nwk: '0xECD6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '67'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '145'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '121'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '105'
			}
		],
		routes: [
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECD6'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5B5A'
			},
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x688C'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			}
		],
		endpoint_names: [
			{
				name: 'THERMOSTAT'
			},
			{
				name: 'COMBINED_INTERFACE'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Thermostat Living Room',
		device_reg_id: '3e69ebb3bcdfecc1e9d1192fab421990',
		area_id: 'living_room'
	},
	{
		ieee: '1f:ff:00:01:00:00:02:f0',
		nwk: 7664,
		manufacturer: 'NAMRON AS',
		model: '4512737',
		name: 'NAMRON AS 4512737',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4644,
		power_source: 'Mains',
		lqi: 255,
		rssi: -65,
		last_seen: '2025-08-17T19:37:32',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4644,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0301',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0009',
						'0x000a',
						'0x0201',
						'0x0204',
						'0x0702',
						'0x0b04'
					],
					output_clusters: []
				},
				2: {
					profile_id: '0x0104',
					device_type: '0x0007',
					input_clusters: ['0x0000', '0x0003'],
					output_clusters: ['0x0003', '0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'NAMRON AS',
			model: '4512737'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.thermostat_bedroom_identify',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'climate.thermostat_bedroom_thermostat',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'number.thermostat_bedroom_local_temperature_offset',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'select.thermostat_bedroom_keypad_lockout',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bedroom_current',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bedroom_voltage',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bedroom_power',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bedroom_summation_delivered',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bedroom_hvac_action',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bedroom_timestamp',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'update.thermostat_bedroom_firmware',
				name: 'NAMRON AS 4512737'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '124'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '80'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '96'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '96'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '255'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '140'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '151'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '99'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '108'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '80'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:86:a5:a0',
				nwk: '0xECD6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '135'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '145'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '79'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '115'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '172'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '88'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			}
		],
		endpoint_names: [
			{
				name: 'THERMOSTAT'
			},
			{
				name: 'COMBINED_INTERFACE'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Thermostat Bedroom',
		device_reg_id: 'eded1dd73b5274c96e1cb84f592cac90',
		area_id: 'bedroom'
	},
	{
		ieee: '1f:ff:00:01:00:00:00:34',
		nwk: 65249,
		manufacturer: 'NAMRON AS',
		model: '4512737',
		name: 'NAMRON AS 4512737',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4644,
		power_source: 'Mains',
		lqi: 255,
		rssi: -52,
		last_seen: '2025-08-17T19:37:24',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4644,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0301',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0009',
						'0x000a',
						'0x0201',
						'0x0204',
						'0x0702',
						'0x0b04'
					],
					output_clusters: []
				},
				2: {
					profile_id: '0x0104',
					device_type: '0x0007',
					input_clusters: ['0x0000', '0x0003'],
					output_clusters: ['0x0003', '0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'NAMRON AS',
			model: '4512737'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.thermostat_bathroom_identify',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'climate.thermostat_bathroom_thermostat',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'number.thermostat_bathroom_local_temperature_offset',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'select.thermostat_bathroom_keypad_lockout',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bathroom_current',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bathroom_voltage',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bathroom_power',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bathroom_summation_delivered',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bathroom_hvac_action',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'sensor.thermostat_bathroom_timestamp',
				name: 'NAMRON AS 4512737'
			},
			{
				entity_id: 'update.thermostat_bathroom_firmware',
				name: 'NAMRON AS 4512737'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Parent',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '215'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '88'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '124'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '136'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '176'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '136'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '132'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '135'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '151'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '180'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '155'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '194'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '106'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '134'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '104'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '216'
			}
		],
		routes: [
			{
				dest_nwk: '0x25A6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3CF1'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			}
		],
		endpoint_names: [
			{
				name: 'THERMOSTAT'
			},
			{
				name: 'COMBINED_INTERFACE'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Thermostat Bathroom',
		device_reg_id: '6a3653b51d9e4dfc9808ecd7ddcacd63',
		area_id: 'bathroom'
	},
	{
		ieee: '00:15:bc:00:36:00:18:43',
		nwk: 6027,
		manufacturer: 'frient A/S',
		model: 'AQSZB-110',
		name: 'frient A/S AQSZB-110',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4117,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -31,
		last_seen: '2025-08-17T19:36:51',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 0,
				manufacturer_code: 4117,
				maximum_buffer_size: 80,
				maximum_incoming_transfer_size: 80,
				server_mask: 10752,
				maximum_outgoing_transfer_size: 80,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0xc0c9',
					device_type: '0x0001',
					input_clusters: ['0x0003', '0x0005', '0x0006'],
					output_clusters: []
				},
				38: {
					profile_id: '0x0104',
					device_type: '0x0302',
					input_clusters: [
						'0x0000',
						'0x0001',
						'0x0003',
						'0x0020',
						'0x0402',
						'0x0405',
						'0x042e',
						'0xfc03'
					],
					output_clusters: ['0x0003', '0x000a', '0x0019']
				}
			},
			manufacturer: 'frient A/S',
			model: 'AQSZB-110'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.frient_a_s_aqszb_110_identify_2',
				name: 'frient A/S AQSZB-110'
			},
			{
				entity_id: 'sensor.frient_a_s_aqszb_110_battery',
				name: 'frient A/S AQSZB-110'
			},
			{
				entity_id: 'sensor.frient_a_s_aqszb_110_temperature',
				name: 'frient A/S AQSZB-110'
			},
			{
				entity_id: 'sensor.frient_a_s_aqszb_110_humidity',
				name: 'frient A/S AQSZB-110'
			},
			{
				entity_id: 'update.frient_a_s_aqszb_110_firmware',
				name: 'frient A/S AQSZB-110'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'unknown 1 device_type of 0xc0c9 profile id'
			},
			{
				name: 'TEMPERATURE_SENSOR'
			}
		],
		user_given_name: null,
		device_reg_id: '30b44e7171e1377c4214bfa1e027bb44',
		area_id: null
	},
	{
		ieee: '0c:43:14:ff:fe:17:3b:92',
		nwk: 40627,
		manufacturer: 'IKEA of Sweden',
		model: 'TRADFRI Driver 30W',
		name: 'IKEA of Sweden TRADFRI Driver 30W',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 244,
		rssi: -52,
		last_seen: '2025-08-17T19:37:00',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0101',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x1000',
						'0xfc7c'
					],
					output_clusters: ['0x0005', '0x0019', '0x0020', '0x1000']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRADFRI Driver 30W'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.kitchen_shelves_identify',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'light.kitchen_shelves_light',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'number.kitchen_shelves_on_off_transition_time',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'number.kitchen_shelves_on_level',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'number.kitchen_shelves_start_up_current_level',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'select.kitchen_shelves_start_up_behavior',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'update.kitchen_shelves_firmware',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Parent',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '204'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '91'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '174'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '116'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '204'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '84'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '116'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '226'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '151'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '153'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '144'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '210'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '220'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '143'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '236'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '168'
			}
		],
		routes: [
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5B5A'
			},
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0x3CF1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x688C'
			}
		],
		endpoint_names: [
			{
				name: 'DIMMABLE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Kitchen Shelves',
		device_reg_id: 'eac1921629c85e24a21c3cf94e6e281a',
		area_id: 'kitchen'
	},
	{
		ieee: '84:2e:14:ff:fe:0e:9a:3c',
		nwk: 21620,
		manufacturer: 'IKEA of Sweden',
		model: 'LEPTITER Recessed spot light',
		name: 'IKEA of Sweden LEPTITER Recessed spot light',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -55,
		last_seen: '2025-08-17T19:24:01',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010c',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x0300',
						'0x1000',
						'0xfc7c'
					],
					output_clusters: ['0x0005', '0x0019', '0x0020', '0x1000']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'LEPTITER Recessed spot light'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.spotlight_sink_1_identify',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'light.spotlight_sink_1_light',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_sink_1_on_off_transition_time',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_sink_1_on_level',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_sink_1_start_up_current_level',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_sink_1_start_up_color_temperature',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'select.spotlight_sink_1_start_up_behavior',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'update.spotlight_sink_1_firmware',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '188'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '73'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '203'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '204'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '81'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '200'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '103'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '143'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '136'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '196'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '178'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '169'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '108'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '251'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '160'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '156'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0x3CF1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3CF1'
			},
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5B5A'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x688C'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5B5A'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			}
		],
		endpoint_names: [
			{
				name: 'COLOR_TEMPERATURE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Spotlight Sink 1',
		device_reg_id: '9ea4f30c1f7d0cf03a31c17fb99b92ff',
		area_id: 'kitchen'
	},
	{
		ieee: '90:fd:9f:ff:fe:de:05:63',
		nwk: 30762,
		manufacturer: 'IKEA of Sweden',
		model: 'TRADFRI bulb E27 WS opal 980lm',
		name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -31,
		last_seen: '2025-08-17T19:36:20',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010c',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x0300',
						'0x1000',
						'0xfc7c'
					],
					output_clusters: ['0x0005', '0x0019', '0x0020', '0x1000']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRADFRI bulb E27 WS opal 980lm'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.light_table_log_identify',
				name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm'
			},
			{
				entity_id: 'light.light_table_log_light',
				name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm'
			},
			{
				entity_id: 'number.light_table_log_on_off_transition_time',
				name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm'
			},
			{
				entity_id: 'number.light_table_log_on_level',
				name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm'
			},
			{
				entity_id: 'number.light_table_log_start_up_current_level',
				name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm'
			},
			{
				entity_id: 'number.light_table_log_start_up_color_temperature',
				name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm'
			},
			{
				entity_id: 'select.light_table_log_start_up_behavior',
				name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm'
			},
			{
				entity_id: 'update.light_table_log_firmware',
				name: 'IKEA of Sweden TRADFRI bulb E27 WS opal 980lm'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Parent',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '114'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '82'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '129'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '152'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '132'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '113'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '104'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '155'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '84'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '92'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:86:a5:a0',
				nwk: '0xECD6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '112'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '162'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '79'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '180'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '124'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '60'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECD6'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5B5A'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0x3CF1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3CF1'
			}
		],
		endpoint_names: [
			{
				name: 'COLOR_TEMPERATURE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Light Table Log',
		device_reg_id: '4a4d070e6c4b24b3c76ea308d229ef34',
		area_id: 'living_room'
	},
	{
		ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
		nwk: 64094,
		manufacturer: 'IKEA of Sweden',
		model: 'LEPTITER Recessed spot light',
		name: 'IKEA of Sweden LEPTITER Recessed spot light',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -64,
		last_seen: '2025-08-17T19:36:34',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010c',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x0300',
						'0x1000',
						'0xfc7c'
					],
					output_clusters: ['0x0005', '0x0019', '0x0020', '0x1000']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'LEPTITER Recessed spot light'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.ikea_of_sweden_leptiter_recessed_spot_light_identify',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'light.ikea_of_sweden_leptiter_recessed_spot_light_light',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.ikea_of_sweden_leptiter_recessed_spot_light_on_off_transition_time',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.ikea_of_sweden_leptiter_recessed_spot_light_on_level',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.ikea_of_sweden_leptiter_recessed_spot_light_start_up_current_level',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.ikea_of_sweden_leptiter_recessed_spot_light_start_up_color_temperature',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'select.ikea_of_sweden_leptiter_recessed_spot_light_start_up_behavior',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'update.ikea_of_sweden_leptiter_recessed_spot_light_firmware',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '171'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '231'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '196'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '253'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '143'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '204'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '93'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '129'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '74'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '216'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '204'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '167'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '84'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '200'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '115'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0xECDB',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3581'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			}
		],
		endpoint_names: [
			{
				name: 'COLOR_TEMPERATURE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Spotlight Fan 2',
		device_reg_id: '033f1d92a524ae747e005c109fbaeabc',
		area_id: 'kitchen'
	},
	{
		ieee: '14:b4:57:ff:fe:65:30:d6',
		nwk: 9638,
		manufacturer: 'IKEA of Sweden',
		model: 'LEPTITER Recessed spot light',
		name: 'IKEA of Sweden LEPTITER Recessed spot light',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -70,
		last_seen: '2025-08-17T19:36:35',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010c',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x0300',
						'0x1000',
						'0xfc7c'
					],
					output_clusters: ['0x0005', '0x0019', '0x0020', '0x1000']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'LEPTITER Recessed spot light'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.spotlight_fan_1_identify_3',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'light.spotlight_fan_1_light_3',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_fan_1_on_off_transition_time',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_fan_1_on_level',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_fan_1_start_up_current_level',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_fan_1_start_up_color_temperature',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'select.spotlight_fan_1_start_up_behavior',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'update.spotlight_fan_1_firmware_3',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '135'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '161'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '211'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '82'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '132'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '108'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '103'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '131'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '172'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '192'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '168'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '112'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '232'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '131'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '188'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '111'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3CF1'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			}
		],
		endpoint_names: [
			{
				name: 'COLOR_TEMPERATURE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Spotlight Fan 1',
		device_reg_id: 'bfe0ba241726188ccd97cb291dde3c2b',
		area_id: 'kitchen'
	},
	{
		ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
		nwk: 23386,
		manufacturer: 'IKEA of Sweden',
		model: 'LEPTITER Recessed spot light',
		name: 'IKEA of Sweden LEPTITER Recessed spot light',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -54,
		last_seen: '2025-08-17T19:36:44',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010c',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x0300',
						'0x1000',
						'0xfc7c'
					],
					output_clusters: ['0x0005', '0x0019', '0x0020', '0x1000']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'LEPTITER Recessed spot light'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.spotlight_sink_2_identify_2',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'light.spotlight_sink_2_light_2',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_sink_2_on_off_transition_time',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_sink_2_on_level',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_sink_2_start_up_current_level',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'number.spotlight_sink_2_start_up_color_temperature',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'select.spotlight_sink_2_start_up_behavior',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			},
			{
				entity_id: 'update.spotlight_sink_2_firmware_2',
				name: 'IKEA of Sweden LEPTITER Recessed spot light'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '197'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '139'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '198'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '201'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '89'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '118'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '102'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '219'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '128'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '224'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '186'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '108'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '202'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '156'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '248'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '116'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0xB3A7',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x4E63'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x782A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x782A'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3581'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			}
		],
		endpoint_names: [
			{
				name: 'COLOR_TEMPERATURE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Spotlight Sink 2',
		device_reg_id: 'c70fce0445fde68cb3a697350234fcae',
		area_id: 'kitchen'
	},
	{
		ieee: 'ec:1b:bd:ff:fe:91:05:a4',
		nwk: 43394,
		manufacturer: 'IKEA of Sweden',
		model: 'TRADFRI on/off switch',
		name: 'IKEA of Sweden TRADFRI on/off switch',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.twobtnremote.IkeaTradfriRemote2Btn',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -55,
		last_seen: '2025-08-17T19:14:45',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0820',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0009', '0x0020', '0x1000', '0xfc7c'],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0008', '0x0019', '0x0102', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRADFRI on/off switch'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.switch_shelves_doorway_identify_2',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			},
			{
				entity_id: 'sensor.switch_shelves_doorway_battery_2',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			},
			{
				entity_id: 'update.switch_shelves_doorway_firmware_2',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'NON_COLOR_CONTROLLER'
			}
		],
		user_given_name: 'Switch Shelves Doorway',
		device_reg_id: 'eb19dbdfce19a4232e67e3e24d2ec776',
		area_id: 'kitchen'
	},
	{
		ieee: '5c:c7:c1:ff:fe:0c:18:4f',
		nwk: 19151,
		manufacturer: 'IKEA of Sweden',
		model: 'TRADFRI on/off switch',
		name: 'IKEA of Sweden TRADFRI on/off switch',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.twobtnremote.IkeaTradfriRemote2Btn',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -52,
		last_seen: '2025-08-17T18:49:31',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0820',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0009', '0x0020', '0x1000', '0xfc7c'],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0008', '0x0019', '0x0102', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRADFRI on/off switch'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.switch_spotlights_identify_3',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			},
			{
				entity_id: 'sensor.switch_spotlights_battery_3',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			},
			{
				entity_id: 'update.switch_spotlights_firmware_3',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'NON_COLOR_CONTROLLER'
			}
		],
		user_given_name: 'Switch Spotlights',
		device_reg_id: '495d346492a2e25a823e3e91a2ea0854',
		area_id: 'kitchen'
	},
	{
		ieee: 'bc:33:ac:ff:fe:2b:9f:09',
		nwk: 15601,
		manufacturer: 'IKEA of Sweden',
		model: 'TRADFRI bulb E27 CWS opal 600lm',
		name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -76,
		last_seen: '2025-08-17T19:36:39',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0102',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x0300',
						'0x1000',
						'0xfc7c'
					],
					output_clusters: ['0x0019', '0x1000']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRADFRI bulb E27 CWS opal 600lm'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.light_ceiling_kitchen_identify',
				name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm'
			},
			{
				entity_id: 'light.light_ceiling_kitchen_light',
				name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm'
			},
			{
				entity_id: 'number.light_ceiling_kitchen_on_off_transition_time',
				name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm'
			},
			{
				entity_id: 'number.light_ceiling_kitchen_on_level',
				name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm'
			},
			{
				entity_id: 'number.light_ceiling_kitchen_start_up_current_level',
				name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm'
			},
			{
				entity_id: 'number.light_ceiling_kitchen_start_up_color_temperature',
				name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm'
			},
			{
				entity_id: 'select.light_ceiling_kitchen_start_up_behavior',
				name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm'
			},
			{
				entity_id: 'update.light_ceiling_kitchen_firmware',
				name: 'IKEA of Sweden TRADFRI bulb E27 CWS opal 600lm'
			}
		],
		neighbors: [
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '80'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '162'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '208'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '120'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '159'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '200'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '168'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '152'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '118'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '113'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '151'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '123'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '200'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '160'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '171'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '120'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '5c:c7:c1:ff:fe:0c:18:4f',
				nwk: '0x4ACF',
				permit_joining: 'NotAccepting',
				depth: '2',
				lqi: '182'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:91:05:a4',
				nwk: '0xA982',
				permit_joining: 'NotAccepting',
				depth: '2',
				lqi: '200'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x782A'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECDB'
			},
			{
				dest_nwk: '0xB3A7',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xB3A7'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x25A6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5B5A'
			}
		],
		endpoint_names: [
			{
				name: 'COLOR_DIMMABLE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Light Ceiling Kitchen',
		device_reg_id: 'dfba9fa9b5b0115ab6ecff48fc445743',
		area_id: 'kitchen'
	},
	{
		ieee: '8c:6f:b9:ff:fe:4e:3f:57',
		nwk: 19361,
		manufacturer: 'IKEA of Sweden',
		model: 'RODRET Dimmer',
		name: 'IKEA of Sweden RODRET Dimmer',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.twobtnremote.IkeaRodretRemote2Btn',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -63,
		last_seen: '2025-08-17T18:40:23',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0820',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0020', '0x1000', '0xfc7c'],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0008', '0x0019', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'RODRET Dimmer'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.switch_bed_light_identify',
				name: 'IKEA of Sweden RODRET Dimmer'
			},
			{
				entity_id: 'sensor.switch_bed_light_battery',
				name: 'IKEA of Sweden RODRET Dimmer'
			},
			{
				entity_id: 'update.switch_bed_light_firmware',
				name: 'IKEA of Sweden RODRET Dimmer'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'NON_COLOR_CONTROLLER'
			}
		],
		user_given_name: 'Switch Bed Light',
		device_reg_id: '3102578f5207aad3e1688edcb5d219c3',
		area_id: 'bedroom'
	},
	{
		ieee: '94:de:b8:ff:fe:d2:96:75',
		nwk: 59191,
		manufacturer: 'IKEA of Sweden',
		model: 'STOFTMOLN ceiling/wall lamp WW24',
		name: 'IKEA of Sweden STOFTMOLN ceiling/wall lamp WW24',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -28,
		last_seen: '2025-08-17T19:36:19',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0101',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x1000',
						'0xfc57'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'STOFTMOLN ceiling/wall lamp WW24'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.light_ceiling_bathroom_hall_identify',
				name: 'IKEA of Sweden STOFTMOLN ceiling/wall lamp WW24'
			},
			{
				entity_id: 'light.light_ceiling_bathroom_hall_light',
				name: 'IKEA of Sweden STOFTMOLN ceiling/wall lamp WW24'
			},
			{
				entity_id: 'number.light_ceiling_bathroom_hall_on_off_transition_time',
				name: 'IKEA of Sweden STOFTMOLN ceiling/wall lamp WW24'
			},
			{
				entity_id: 'number.light_ceiling_bathroom_hall_on_level',
				name: 'IKEA of Sweden STOFTMOLN ceiling/wall lamp WW24'
			},
			{
				entity_id: 'number.light_ceiling_bathroom_hall_start_up_current_level',
				name: 'IKEA of Sweden STOFTMOLN ceiling/wall lamp WW24'
			},
			{
				entity_id: 'select.light_ceiling_bathroom_hall_start_up_behavior',
				name: 'IKEA of Sweden STOFTMOLN ceiling/wall lamp WW24'
			},
			{
				entity_id: 'update.light_ceiling_bathroom_hall_firmware',
				name: 'IKEA of Sweden STOFTMOLN ceiling/wall lamp WW24'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '255'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '178'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '185'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '149'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '179'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '197'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '88'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '158'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '217'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '95'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '183'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '137'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '179'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '152'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '255'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '190'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0xB3A7',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xB3A7'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3581'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0xECDB',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECDB'
			},
			{
				dest_nwk: '0x3CF1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			}
		],
		endpoint_names: [
			{
				name: 'DIMMABLE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Light Ceiling Bathroom Hall',
		device_reg_id: '1f654802292b552c5e6c17bd467e70d7',
		area_id: 'bathroom'
	},
	{
		ieee: 'ec:1b:bd:ff:fe:8f:f5:57',
		nwk: 12265,
		manufacturer: 'IKEA of Sweden',
		model: 'SYMFONISK Sound Controller',
		name: 'IKEA of Sweden SYMFONISK Sound Controller',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.symfonisk.IkeaSYMFONISK2',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -46,
		last_seen: '2025-08-17T19:32:51',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0006',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0020', '0x1000', '0xfc7c'],
					output_clusters: ['0x0003', '0x0004', '0x0005', '0x0006', '0x0008', '0x0019', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'SYMFONISK Sound Controller'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.dimmer_ceiling_bathroom_hall_identify',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			},
			{
				entity_id: 'sensor.dimmer_ceiling_bathroom_hall_battery',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			},
			{
				entity_id: 'update.dimmer_ceiling_bathroom_hall_firmware',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'REMOTE_CONTROL'
			}
		],
		user_given_name: 'Dimmer Ceiling Bathroom Hall',
		device_reg_id: '2d69c85c7d098a4f809160269c70d4b7',
		area_id: 'bathroom'
	},
	{
		ieee: '8c:6f:b9:ff:fe:b4:01:e5',
		nwk: 30583,
		manufacturer: 'IKEA of Sweden',
		model: 'RODRET Dimmer',
		name: 'IKEA of Sweden RODRET Dimmer',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.twobtnremote.IkeaRodretRemote2Btn',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -78,
		last_seen: '2025-08-17T19:21:13',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0820',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0020', '0x1000', '0xfc7c'],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0008', '0x0019', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'RODRET Dimmer'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.dimmer_2_identify',
				name: 'IKEA of Sweden RODRET Dimmer'
			},
			{
				entity_id: 'sensor.dimmer_2_battery',
				name: 'IKEA of Sweden RODRET Dimmer'
			},
			{
				entity_id: 'update.dimmer_2_firmware',
				name: 'IKEA of Sweden RODRET Dimmer'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'NON_COLOR_CONTROLLER'
			}
		],
		user_given_name: 'Dimmer 2',
		device_reg_id: '77a3382ba433e0ad62b936493d6baf92',
		area_id: null
	},
	{
		ieee: 'f0:82:c0:ff:fe:9f:6b:90',
		nwk: 57344,
		manufacturer: 'IKEA of Sweden',
		model: 'TRADFRI on/off switch',
		name: 'IKEA of Sweden TRADFRI on/off switch',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.twobtnremote.IkeaTradfriRemote2Btn',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -70,
		last_seen: '2025-08-17T19:27:20',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0820',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0009', '0x0020', '0x1000', '0xfc7c'],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0008', '0x0019', '0x0102', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRADFRI on/off switch'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.switch_shelves_countertop_identify',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			},
			{
				entity_id: 'sensor.switch_shelves_countertop_battery',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			},
			{
				entity_id: 'update.switch_shelves_countertop_firmware',
				name: 'IKEA of Sweden TRADFRI on/off switch'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'NON_COLOR_CONTROLLER'
			}
		],
		user_given_name: 'Switch Shelves Countertop',
		device_reg_id: 'd369114814d1bcb233f2ddf3fd2e47b2',
		area_id: 'kitchen'
	},
	{
		ieee: '8c:65:a3:ff:fe:86:a5:a0',
		nwk: 60630,
		manufacturer: 'IKEA of Sweden',
		model: 'TRETAKT Smart plug',
		name: 'IKEA of Sweden TRETAKT Smart plug',
		quirk_applied: true,
		quirk_class: 'zigpy.quirks.v2.CustomDeviceV2',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -65,
		last_seen: '2025-08-17T19:37:01',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010a',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x1000',
						'0xfc57',
						'0xfc7c',
						'0xfc85'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: ['0x0021'],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRETAKT Smart plug'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.plug_bed_light_identify',
				name: 'IKEA of Sweden TRETAKT Smart plug'
			},
			{
				entity_id: 'select.plug_bed_light_start_up_behavior',
				name: 'IKEA of Sweden TRETAKT Smart plug'
			},
			{
				entity_id: 'switch.plug_bed_light_switch',
				name: 'IKEA of Sweden TRETAKT Smart plug'
			},
			{
				entity_id: 'update.plug_bed_light_firmware',
				name: 'IKEA of Sweden TRETAKT Smart plug'
			}
		],
		neighbors: [
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '128'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '40'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '55'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '53'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '172'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '110'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '68'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '123'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '121'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '79'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '69'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '72'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '60'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '57'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '58'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x7320'
			},
			{
				dest_nwk: '0xB3A7',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xB3A7'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x88AA'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x3581'
			}
		],
		endpoint_names: [
			{
				name: 'ON_OFF_PLUG_IN_UNIT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Plug Bed Light',
		device_reg_id: '91b57511bf7dc39ba79203cb2102d453',
		area_id: 'bedroom'
	},
	{
		ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
		nwk: 45991,
		manufacturer: 'IKEA of Sweden',
		model: 'INSPELNING Smart plug',
		name: 'IKEA of Sweden INSPELNING Smart plug',
		quirk_applied: true,
		quirk_class: 'zigpy.quirks.v2.CustomDeviceV2',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -63,
		last_seen: '2025-08-17T19:37:33',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010a',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0702',
						'0x0b04',
						'0x1000',
						'0xfc7c',
						'0xfc85'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: ['0x0021'],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'INSPELNING Smart plug'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.metered_plug_basement_fridge_identify',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'select.metered_plug_basement_fridge_start_up_behavior',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_basement_fridge_current',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_basement_fridge_voltage',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_basement_fridge_power',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_basement_fridge_summation_delivered',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'switch.metered_plug_basement_fridge_switch',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'update.metered_plug_basement_fridge_firmware',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			}
		],
		neighbors: [
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '125'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '152'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '76'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '145'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '137'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '128'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '106'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '120'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '191'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '95'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:86:a5:a0',
				nwk: '0xECD6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '83'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '63'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '107'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '53'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '116'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '52'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:6f:b9:ff:fe:b4:01:e5',
				nwk: '0x7777',
				permit_joining: 'NotAccepting',
				depth: '2',
				lqi: '208'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:ba:20:ff:fe:62:3c:df',
				nwk: '0x7C1F',
				permit_joining: 'NotAccepting',
				depth: '2',
				lqi: '200'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x688C'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			}
		],
		endpoint_names: [
			{
				name: 'ON_OFF_PLUG_IN_UNIT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Metered Plug Basement Fridge',
		device_reg_id: '31b61340b79e8c773e96e9e3a2ad4562',
		area_id: 'basement'
	},
	{
		ieee: '68:0a:e2:ff:fe:30:c0:75',
		nwk: 59304,
		manufacturer: 'IKEA of Sweden',
		model: 'SYMFONISK Sound Controller',
		name: 'IKEA of Sweden SYMFONISK Sound Controller',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.symfonisk.IkeaSYMFONISK1',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: null,
		rssi: null,
		last_seen: '2025-06-19T16:45:21',
		available: false,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0006',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0020', '0x1000'],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0008', '0x0019', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'SYMFONISK Sound Controller'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.ikea_of_sweden_symfonisk_sound_controller_identify',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			},
			{
				entity_id: 'sensor.ikea_of_sweden_symfonisk_sound_controller_battery',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			},
			{
				entity_id: 'update.ikea_of_sweden_symfonisk_sound_controller_firmware',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'REMOTE_CONTROL'
			}
		],
		user_given_name: null,
		device_reg_id: 'e734ee54083ae80b1f3498ff0e9cfc27',
		area_id: null
	},
	{
		ieee: '68:0a:e2:ff:fe:5c:06:8d',
		nwk: 9499,
		manufacturer: 'IKEA of Sweden',
		model: 'SYMFONISK Sound Controller',
		name: 'IKEA of Sweden SYMFONISK Sound Controller',
		quirk_applied: true,
		quirk_class: 'zhaquirks.ikea.symfonisk.IkeaSYMFONISK1',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: null,
		rssi: null,
		last_seen: '2024-11-16T14:29:04',
		available: false,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0006',
					input_clusters: ['0x0000', '0x0001', '0x0003', '0x0020', '0x1000'],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0008', '0x0019', '0x1000']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'SYMFONISK Sound Controller'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.ikea_of_sweden_symfonisk_sound_controller_identify_2',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			},
			{
				entity_id: 'sensor.ikea_of_sweden_symfonisk_sound_controller_battery_2',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			},
			{
				entity_id: 'update.ikea_of_sweden_symfonisk_sound_controller_firmware_2',
				name: 'IKEA of Sweden SYMFONISK Sound Controller'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'REMOTE_CONTROL'
			}
		],
		user_given_name: null,
		device_reg_id: '03a6e24bc254dcd3815d6f50dc9c41a9',
		area_id: null
	},
	{
		ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
		nwk: 22543,
		manufacturer: 'IKEA of Sweden',
		model: 'INSPELNING Smart plug',
		name: 'IKEA of Sweden INSPELNING Smart plug',
		quirk_applied: true,
		quirk_class: 'zigpy.quirks.v2.CustomDeviceV2',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -70,
		last_seen: '2025-08-17T19:37:34',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010a',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0702',
						'0x0b04',
						'0x1000',
						'0xfc7c',
						'0xfc85'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: ['0x0021'],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'INSPELNING Smart plug'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.metered_plug_living_room_desk_identify_2',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'select.metered_plug_living_room_desk_start_up_behavior_2',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_living_room_desk_current_2',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_living_room_desk_voltage_2',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_living_room_desk_power_2',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_living_room_desk_summation_delivered_2',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'switch.metered_plug_living_room_desk_switch_2',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'update.metered_plug_living_room_desk_firmware_2',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			}
		],
		neighbors: [
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '133'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '168'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '98'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '169'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '116'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '163'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '126'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '126'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '140'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '180'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '8c:65:a3:ff:fe:86:a5:a0',
				nwk: '0xECD6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '112'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '172'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '156'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '163'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '179'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '1a:52:0b:87:99:5f:96:e5',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '128'
			}
		],
		routes: [
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0x782A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x782A'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0xFED5',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0xECDB',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECDB'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFED5'
			},
			{
				dest_nwk: '0x5B5A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x782A'
			},
			{
				dest_nwk: '0x3CF1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			}
		],
		endpoint_names: [
			{
				name: 'ON_OFF_PLUG_IN_UNIT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Metered Plug Living Room Desk',
		device_reg_id: '2273ab81a6503ffe540193c2f27f0a83',
		area_id: 'living_room'
	},
	{
		ieee: '00:17:88:01:0d:80:db:3d',
		nwk: 29472,
		manufacturer: 'Signify Netherlands B.V.',
		model: 'LOM007',
		name: 'Signify Netherlands B.V. LOM007',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4107,
		power_source: 'Mains',
		lqi: 255,
		rssi: -65,
		last_seen: '2025-08-17T19:36:21',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4107,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 128,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 128,
				descriptor_capability_field: 0
			},
			endpoints: {
				11: {
					profile_id: '0x0104',
					device_type: '0x010a',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x1000',
						'0xfc02'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: [],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'Signify Netherlands B.V.',
			model: 'LOM007'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.plug_mush_light_identify',
				name: 'Signify Netherlands B.V. LOM007'
			},
			{
				entity_id: 'number.plug_mush_light_start_up_current_level',
				name: 'Signify Netherlands B.V. LOM007'
			},
			{
				entity_id: 'select.plug_mush_light_start_up_behavior',
				name: 'Signify Netherlands B.V. LOM007'
			},
			{
				entity_id: 'switch.plug_mush_light_switch',
				name: 'Signify Netherlands B.V. LOM007'
			},
			{
				entity_id: 'update.plug_mush_light_firmware',
				name: 'Signify Netherlands B.V. LOM007'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '183'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '147'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '118'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '151'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '160'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '167'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '165'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '136'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '60'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '90:fd:9f:ff:fe:de:05:63',
				nwk: '0x782A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '168'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '166'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '129'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '153'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '163'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:86:a5:a0',
				nwk: '0xECD6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '127'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '189'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '145'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '128'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '217'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '147'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:6f:b9:ff:fe:b3:d8:60',
				nwk: '0xEE1F',
				permit_joining: 'NotAccepting',
				depth: '2',
				lqi: '175'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0xB3A7',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xB3A7'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECD6'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			}
		],
		endpoint_names: [
			{
				name: 'ON_OFF_PLUG_IN_UNIT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Plug Mush Light',
		device_reg_id: '4806842e886162b4c011c57492baf7c5',
		area_id: 'living_room'
	},
	{
		ieee: '8c:65:a3:ff:fe:33:98:de',
		nwk: 65237,
		manufacturer: 'IKEA of Sweden',
		model: 'INSPELNING Smart plug',
		name: 'IKEA of Sweden INSPELNING Smart plug',
		quirk_applied: true,
		quirk_class: 'zigpy.quirks.v2.CustomDeviceV2',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -32,
		last_seen: '2025-08-17T19:37:34',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010a',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0702',
						'0x0b04',
						'0x1000',
						'0xfc7c',
						'0xfc85'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: ['0x0021'],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'INSPELNING Smart plug'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.metered_plug_bathroom_desk_identify',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'select.metered_plug_bathroom_desk_start_up_behavior',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_bathroom_desk_current',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_bathroom_desk_voltage',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_bathroom_desk_power',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_bathroom_desk_summation_delivered',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'switch.metered_plug_bathroom_desk_switch',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'update.metered_plug_bathroom_desk_firmware',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '255'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '168'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '197'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '179'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '174'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '148'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '177'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '255'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '130'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '216'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '244'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '109'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '255'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '136'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '211'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:15:bc:00:36:00:18:43',
				nwk: '0x178B',
				permit_joining: 'NotAccepting',
				depth: '2',
				lqi: '193'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0xFEE1',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFEE1'
			},
			{
				dest_nwk: '0x782A',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xC92E'
			},
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECD6'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0x688C',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x688C'
			},
			{
				dest_nwk: '0x25A6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0x01FD',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x4E45'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			}
		],
		endpoint_names: [
			{
				name: 'ON_OFF_PLUG_IN_UNIT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Metered Plug Bathroom Desk',
		device_reg_id: 'b370cd3b1cbc276b2e321dea4156fdf3',
		area_id: 'bathroom'
	},
	{
		ieee: '3c:2e:f5:ff:fe:47:2a:24',
		nwk: 26764,
		manufacturer: 'IKEA of Sweden',
		model: 'TRADFRI Driver 30W',
		name: 'IKEA of Sweden TRADFRI Driver 30W',
		quirk_applied: false,
		quirk_class: 'zigpy.device.Device',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -78,
		last_seen: '2025-08-17T19:23:40',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0101',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0008',
						'0x1000',
						'0xfc57'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: ['0x0021'],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'TRADFRI Driver 30W'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.light_corner_shelf_kitchen_identify',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'light.light_corner_shelf_kitchen_light',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'number.light_corner_shelf_kitchen_on_off_transition_time',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'number.light_corner_shelf_kitchen_on_level',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'number.light_corner_shelf_kitchen_start_up_current_level',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'select.light_corner_shelf_kitchen_start_up_behavior',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			},
			{
				entity_id: 'update.light_corner_shelf_kitchen_firmware',
				name: 'IKEA of Sweden TRADFRI Driver 30W'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '148'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '60'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '147'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '208'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '148'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '144'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '130'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '188'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '165'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:a0:81:ff:fe:57:29:75',
				nwk: '0xD02A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '180'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '118'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '135'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:82',
				nwk: '0xFB80',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '114'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '8c:65:a3:ff:fe:33:98:de',
				nwk: '0xFED5',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '156'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '84'
			}
		],
		routes: [
			{
				dest_nwk: '0xECD6',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x580F'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x9EB3'
			},
			{
				dest_nwk: '0x580F',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x25A6'
			},
			{
				dest_nwk: '0xFB80',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFB80'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x21CE'
			},
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0x0000'
			}
		],
		endpoint_names: [
			{
				name: 'DIMMABLE_LIGHT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Light Corner Shelf Kitchen',
		device_reg_id: '86eff019816680388b215e73a97486ac',
		area_id: 'kitchen'
	},
	{
		ieee: 'f8:44:77:ff:fe:f7:aa:7e',
		nwk: 4253,
		manufacturer: 'IKEA of Sweden',
		model: 'VALLHORN Wireless Motion Sensor',
		name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor',
		quirk_applied: true,
		quirk_class: 'zigpy.quirks.v2.CustomDeviceV2',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Battery or Unknown',
		lqi: 255,
		rssi: -63,
		last_seen: '2025-08-17T19:37:18',
		available: true,
		device_type: 'EndDevice',
		signature: {
			node_descriptor: {
				logical_type: 2,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 128,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x0850',
					input_clusters: [
						'0x0000',
						'0x0001',
						'0x0003',
						'0x0020',
						'0x0b05',
						'0x1000',
						'0xfc7c',
						'0xfc81'
					],
					output_clusters: ['0x0003', '0x0004', '0x0006', '0x0019', '0x1000']
				},
				2: {
					profile_id: '0x0104',
					device_type: '0x0107',
					input_clusters: ['0x0000', '0x0003', '0x0406'],
					output_clusters: ['0x0003']
				},
				3: {
					profile_id: '0x0104',
					device_type: '0x0106',
					input_clusters: ['0x0000', '0x0003', '0x0400'],
					output_clusters: ['0x0003']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'VALLHORN Wireless Motion Sensor'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'binary_sensor.motion_sensor_living_room_opening',
				name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor'
			},
			{
				entity_id: 'binary_sensor.motion_sensor_living_room',
				name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor'
			},
			{
				entity_id: 'button.motion_sensor_living_room_identify',
				name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor'
			},
			{
				entity_id: 'number.motion_sensor_living_room_on_time',
				name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor'
			},
			{
				entity_id: 'sensor.motion_sensor_living_room_battery',
				name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor'
			},
			{
				entity_id: 'sensor.motion_sensor_living_room_illuminance',
				name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor'
			},
			{
				entity_id: 'switch.motion_sensor_living_room_on_only_when_dark',
				name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor'
			},
			{
				entity_id: 'update.motion_sensor_living_room_firmware',
				name: 'IKEA of Sweden VALLHORN Wireless Motion Sensor'
			}
		],
		neighbors: [],
		routes: [],
		endpoint_names: [
			{
				name: 'ON_OFF_SENSOR'
			},
			{
				name: 'OCCUPANCY_SENSOR'
			},
			{
				name: 'LIGHT_SENSOR'
			}
		],
		user_given_name: 'Motion sensor Living Room',
		device_reg_id: '356019d2e063688f52594dbc4f406470',
		area_id: 'living_room'
	},
	{
		ieee: '94:a0:81:ff:fe:57:29:75',
		nwk: 53290,
		manufacturer: 'IKEA of Sweden',
		model: 'INSPELNING Smart plug',
		name: 'IKEA of Sweden INSPELNING Smart plug',
		quirk_applied: true,
		quirk_class: 'zigpy.quirks.v2.CustomDeviceV2',
		quirk_id: null,
		manufacturer_code: 4476,
		power_source: 'Mains',
		lqi: 255,
		rssi: -53,
		last_seen: '2025-08-17T19:37:31',
		available: true,
		device_type: 'Router',
		signature: {
			node_descriptor: {
				logical_type: 1,
				complex_descriptor_available: 0,
				user_descriptor_available: 0,
				reserved: 0,
				aps_flags: 0,
				frequency_band: 8,
				mac_capability_flags: 142,
				manufacturer_code: 4476,
				maximum_buffer_size: 82,
				maximum_incoming_transfer_size: 82,
				server_mask: 11264,
				maximum_outgoing_transfer_size: 82,
				descriptor_capability_field: 0
			},
			endpoints: {
				1: {
					profile_id: '0x0104',
					device_type: '0x010a',
					input_clusters: [
						'0x0000',
						'0x0003',
						'0x0004',
						'0x0005',
						'0x0006',
						'0x0702',
						'0x0b04',
						'0x1000',
						'0xfc7c',
						'0xfc85'
					],
					output_clusters: ['0x0019']
				},
				242: {
					profile_id: '0xa1e0',
					device_type: '0x0061',
					input_clusters: ['0x0021'],
					output_clusters: ['0x0021']
				}
			},
			manufacturer: 'IKEA of Sweden',
			model: 'INSPELNING Smart plug'
		},
		active_coordinator: false,
		entities: [
			{
				entity_id: 'button.metered_plug_dishwasher_identify',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'select.metered_plug_dishwasher_start_up_behavior',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_dishwasher_current',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_dishwasher_voltage',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_dishwasher_power',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'sensor.metered_plug_dishwasher_summation_delivered',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'switch.metered_plug_dishwasher',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			},
			{
				entity_id: 'update.metered_plug_dishwasher_firmware',
				name: 'IKEA of Sweden INSPELNING Smart plug'
			}
		],
		neighbors: [
			{
				device_type: 'Coordinator',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:21:2e:ff:ff:09:44:73',
				nwk: '0x0000',
				permit_joining: 'Unknown',
				depth: '0',
				lqi: '164'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:02:f0',
				nwk: '0x1DF0',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '72'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '14:b4:57:ff:fe:65:30:d6',
				nwk: '0x25A6',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '200'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'bc:33:ac:ff:fe:2b:9f:09',
				nwk: '0x3CF1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '159'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:2e:14:ff:fe:0e:9a:3c',
				nwk: '0x5474',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '191'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '84:b4:db:ff:fe:b5:7b:de',
				nwk: '0x57D3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '100'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:8c:7f',
				nwk: '0x580F',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '137'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:c1:c4:a1',
				nwk: '0x5B5A',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '235'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '3c:2e:f5:ff:fe:47:2a:24',
				nwk: '0x688C',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '148'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '00:17:88:01:0d:80:db:3d',
				nwk: '0x7320',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '148'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '0c:43:14:ff:fe:17:3b:92',
				nwk: '0x9EB3',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '151'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:f6:4c:ff:fe:bc:89:bb',
				nwk: '0xB3A7',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '189'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Parent',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '94:de:b8:ff:fe:d2:96:75',
				nwk: '0xE737',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '182'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'ec:1b:bd:ff:fe:2a:bd:93',
				nwk: '0xECDB',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '75'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'cc:cc:cc:ff:fe:a0:08:9c',
				nwk: '0xFA5E',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '215'
			},
			{
				device_type: 'Router',
				rx_on_when_idle: 'On',
				relationship: 'Sibling',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: '1f:ff:00:01:00:00:00:34',
				nwk: '0xFEE1',
				permit_joining: 'Unknown',
				depth: '15',
				lqi: '148'
			},
			{
				device_type: 'EndDevice',
				rx_on_when_idle: 'Off',
				relationship: 'Child',
				extended_pan_id: '81:d3:64:b8:f2:a5:a2:0a',
				ieee: 'f0:82:c0:ff:fe:9f:6b:90',
				nwk: '0xE000',
				permit_joining: 'NotAccepting',
				depth: '2',
				lqi: '205'
			}
		],
		routes: [
			{
				dest_nwk: '0x0000',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: true,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0x5474',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x5474'
			},
			{
				dest_nwk: '0x9EB3',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x7E5D'
			},
			{
				dest_nwk: '0x1DF0',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0x1DF0'
			},
			{
				dest_nwk: '0xFA5E',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xFA5E'
			},
			{
				dest_nwk: '0xECDB',
				route_status: 'Active',
				memory_constrained: false,
				many_to_one: false,
				route_record_required: false,
				next_hop: '0xECDB'
			}
		],
		endpoint_names: [
			{
				name: 'ON_OFF_PLUG_IN_UNIT'
			},
			{
				name: 'PROXY_BASIC'
			}
		],
		user_given_name: 'Metered Plug Dishwasher',
		device_reg_id: '818b885089fea56b94a8c3b2b2bd574f',
		area_id: 'kitchen'
	}
];


function getNeighbors(data) {
	return (
		data.routes
			?.map((r) => {
				const destId = r.dest_nwk;
				const neigh = data.neighbors.filter((n) => n.nwk === destId);
				if (neigh?.length < 1) return;

				return hassData.filter((n) => n.ieee === neigh[0].ieee);
			})
			?.flat()
			?.map((target) => {
				if (target === 29) {
					return;
				} else if (target === undefined) {
					return;
				}

				return target;
			})
			.filter((_) => _ !== undefined) ?? []
	);
}

function getCoordinatorNeighbors(coordinatorId) {
  return hassData.filter(d => {
    const exists = d.neighbors.findIndex(n => n.ieee === coordinatorId)
    return exists;
  })
}

let firstNode = [
	{
		id: 0,
		name: 'HUB',
    ieee: hassData[0].ieee,
    device: hassData[0].name,
    area: hassData[0].area_id,
    type: hassData[0].device_type,
    neighbors: getCoordinatorNeighbors('00:21:2e:ff:ff:09:44:73'),
		group: 0
	}
];

const moreNodes = hassData
	.filter((d) => d?.user_given_name && d.user_given_name !== '')
	.map((d) => {
    const group = d.device_type === 'EndDevice' ? 2 : 1 

		return {
			name: d.user_given_name,
			ieee: d.ieee,
      device: d.name,
      area: d.area_id,
      type: d.device_type,
			neighbors: getNeighbors(d),
			group
		};
	})
	.filter((n) => n !== undefined)
	.map((n, id) => {
		return {
			...n,
			id: id + 1
		};
	});

const nodes = firstNode.concat(moreNodes);

const link = firstNode
	.map((d, source) => {
		return (
			d?.neighbors?.map((n) => {
				const matching = nodes.findIndex((node) => node.ieee === n.ieee);
        if (matching === -1) return

				return {
					source,
					target: matching,
				};
			}) || []
		);
	})
	.flat()
	.filter((el) => el !== undefined);

const moreLinks = nodes
	.map((d, source) => {
		return (
			d?.neighbors?.map((n) => {
        if (n.ieee === '00:21:2e:ff:ff:09:44:73') return

				const matching = nodes.findIndex((node) => node.ieee === n.ieee);
        if (matching === -1) return

				return {
					target: matching,
					source
				};
			}) || []
		);
	})
	.flat()
	.filter((el) => el !== undefined);

const links = link.concat(moreLinks)

export const data = { nodes, links };
