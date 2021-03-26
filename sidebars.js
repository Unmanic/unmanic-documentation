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
