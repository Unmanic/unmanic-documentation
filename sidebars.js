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
                    label: 'Instructions',
                    items: [
                        'installation/pip',
                        'installation/docker',
                        'installation/kubernetes',
                        'installation/windows',
                        'installation/windows_wsl',
                        'installation/macos',
                        'installation/unraid',
                        'installation/synology',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Using Unmanic',
            items: [
                {
                    type: 'category',
                    label: 'Dashboard',
                    items: [
                        'dashboard/pending_tasks',
                        'dashboard/workers',
                        'dashboard/completed_tasks',
                    ],
                },
                {
                    type: 'category',
                    label: 'Configuration',
                    items: [
                        {
                            type: 'category',
                            label: 'Libraries',
                            items: [
                                'configuration/libraries/adding_libraries',
                                'configuration/libraries/configure_libraries',
                                'configuration/libraries/library_scanner',
                                'configuration/libraries/file_testing',
                                'configuration/libraries/managing_task_list',
                            ],
                        },
                        'configuration/workers_settings',
                        {
                            type: 'category',
                            label: 'Plugins',
                            items: [
                                'configuration/plugins/overview',
                                'configuration/plugins/installing_plugins',
                                'configuration/plugins/adding_a_custom_plugin_repo',
                                'configuration/plugins/configuring_plugins',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Link',
                            items: [
                                'configuration/linking/link_overview',
                                'configuration/linking/link_local_settings',
                                'configuration/linking/link_remote_installations',
                                'configuration/linking/link_remote_configuration',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Development',
            items: [
                {
                    type: 'category',
                    label: 'Plugins',
                    items: [
                        'development/developing_plugins',
                        {
                            type: 'category',
                            label: 'Writing Plugins',
                            items: [
                                'development/writing_plugins/introduction',
                                'development/writing_plugins/creating_a_new_plugin',
                                'development/writing_plugins/plugin_settings',
                                'development/writing_plugins/system_info',
                                'development/writing_plugins/plugin_runner_types',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Plugin Repositories',
                            items: [
                                'development/plugin_repos/creating_your_own_repo',
                                'development/plugin_repos/creating_a_pull_request'
                            ],
                        },
                        'development/plugin_manager_cli',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Advanced',
            items: [
                {
                    type: 'category',
                    label: 'Dependencies',
                    items: [
                        'advanced/linux_hardware_accelerated_encoding_nvidia',
                    ],
                },
                {
                    type: 'category',
                    label: 'Installation',
                    items: [
                        'advanced/docker_hardware_accelerated_encoding_nvidia',
                        'advanced/docker_hardware_accelerated_encoding_vaapi',
                        'advanced/docker_compose_cifs_mounts',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Community Guides',
            items: [{ type: 'autogenerated', dirName: 'guides' }],
        },
    ]
};
