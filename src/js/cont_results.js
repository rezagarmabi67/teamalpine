document.addEventListener('alpine:init', () => {
    Alpine.data('clubLightBox', () => ({
        selectedTag: 'all',
        tags: [
            {
                name: 'all',
                lable: 'همه',
            },
            
            {
                name: 'club',
                lable: 'باشگا هها',
            },
            {
                name: 'coach',
                lable: 'مربیان',
            },
            {
                name: 'test',
                lable: 'تست و استعدایابی',
            },
            {
                name: 'school',
                lable: 'مدارس فوتبال',
            },

        ],

        clubs: [

            {
                src: 'img/پرسپولیس.png',
                title: 'باشگاه فوتبال پرسپولیس',
                city: 'تهران',
                like: 23,
                score: 4.2,
                tags: ['all', 'club'],
            },

            {
                src: 'img/پرسپولیس.png',
                title: 'تست فوتبال رده نوجوانان  پرسپولیس',
                city: 'تهران',
                like: 16,
                score: 4.6,
                tags: ['all', 'test'],
            },

            {
                src: 'img/باقری.jpg',
                title: 'کریم باقری',
                nameTeam:'پرسپولیس',
                city: 'تبریز',
                like: 16,
                score: 4.6,
                tags: ['all', 'coach'],
            },
            
            {
                src: 'img/استقلال.png',
                title: 'باشگاه فوتبال استقلال',
                city: 'تهران',
                like: 23,
                score: 4.2,
                tags: ['all', 'club'],
            },

            {
                src: 'img/استقلال.png',
                title: 'تست فوتبال رده نوجوانان  استقلال',
                city: 'تهران',
                like: 5,
                score: 3.3,
                tags: ['all', 'test'],
            },

            {
                src: 'img/ویرا.jpg',
                title: 'اسمار ویرا',
                nameTeam:'استقلال',
                city: 'اهواز',
                like: 25,
                score: 4.6,
                tags: ['all', 'coach'],
            },
            
            {
                src: 'img/سپاهان.png',
                title: 'آکادمی فوتبال سپاهان ',
                city: 'سپاهان',
                like: 4,
                score: 3.6,
                tags: ['all', 'school'],
            },

            {
                src: 'img/سایپا.png',
                title: 'تست فوتبال رده نونهالان سایپا',
                city: 'تهران',
                like: 16,
                score: 4.6,
                tags: ['all', 'test'],
            },

            {
                src: 'img/یحیی.jpg',
                title: 'یحیی گل محمدی',
                nameTeam:'پرسپولیس',
                city: 'تهران',
                like: 36,
                score: 4.8,
                tags: ['all', 'coach'],
            },
            
            {
                src: 'img/پیکان.png',
                title: 'آکادمی فوتبال پیکان',
                city: 'تهران',
                like: 12,
                score: 4.5,
                tags: ['all', 'school'],
            },
            {
                src: 'img/سپاهان.png',
                title: 'تست فوتبال رده نوجوانان سپاهان',
                city: 'تهران',
                like: 5,
                score: 3.3,
                tags: ['all', 'test'],
            },

            {
                src: 'img/خانبان.jpg',
                title: 'محمدرضا خانبان',
                nameTeam:'پرسپولیس',
                city: 'تهران',
                like: 25,
                score: 4.6,
                tags: ['all', 'coach'],
            },

            {
                src: 'img/استقلال.png',
                title: 'تست فوتبال رده جوانان استقلال',
                city: 'تهران',
                like: 5,
                score: 3.3,
                tags: ['all', 'test'],
            },
          
        ],
    }));
});


