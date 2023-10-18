document.addEventListener('alpine:init', () => {
    Alpine.data('searchBox', () => ({
        citys: [
            {
                name: 'tehran',
                lable: 'تهران',
            },
            {
                name: 'mashhad',
                lable: 'مشهد',
            },
            {
                name: 'esfahan',
                lable: 'اصفهان',
            },
            
        ],

        fieldSports:[
            {
                name: 'football',
                lable: 'فوتبال',
            },
            {
                name: 'vollyball',
                lable: 'والیبال',
            },
            {
                name: 'basketball',
                lable: 'بسکتبال',
            },
        ]
    }));
});