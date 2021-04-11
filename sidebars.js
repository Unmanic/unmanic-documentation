module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Welcome',
            items: [
                'overview',
            ],
        },
        {
            type: 'category',
            label: 'Installation',
            items: [
                'requirements',
                {
                    type: 'category',
                    label: 'Installation',
                    items: [
                        'installation/pip',
                        'installation/docker',
                        'installation/unraid',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Configuration',
            items: [
                'configuration/general',
            ],
        },
        {
            type: 'category',
            label: 'Plugins',
            items: [
                'plugins/overview',
                {
                    type: 'category',
                    label: 'Writing Plugins',
                    items: [
                        'plugins/writing_plugins/introduction',
                        'plugins/writing_plugins/creating_a_new_plugin',
                        'plugins/writing_plugins/plugin_settings',
                        'plugins/writing_plugins/system_info',
                        'plugins/writing_plugins/plugin_runner_types',
                    ],
                },
                'plugins/plugin_manager_cli',
            ],
        },
        {
            type: 'category',
            label: 'Advanced',
            items: [
                {
                    type: 'category',
                    label: 'Configuration',
                    items: [
                        'advanced/hardware_accelerated_encoding_nvenc',
                        'advanced/hardware_accelerated_encoding_vaapi',
                    ],
                },
            ],
        },
    ],
};
