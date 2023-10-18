//////////////////       menu clubs      //////////////////
document.addEventListener('alpine:init', () => {
    Alpine.data('menuClus', () => ({
        selectedTab: 'usercomments',
        tabs: [
            {
                name: 'index',
                lable: 'صفحه اصلی',
            },
            {
                name: 'coachs',
                lable: 'مربیان',
            },
            {
                name: 'honors',
                lable: ' افتخارات',
            },
            {
                name: 'testFootball',
                lable: 'تست و استعدایابی',
            },
            {
                name: 'gallery',
                lable: 'گالری',
            },
            {
                name: 'contact',
                lable: ' راه های ارتباطی',
            },
            {
                name: 'usercomments',
                lable: 'امتیاز کاربران',
            },
        ],
    }));
});

//////////////////       like      //////////////////
const Counter = () => {
    return {
        moreInfo:false,
        like: 0,
        isLiked: false,
        likeHandler() {
            this.isLiked = !this.isLiked;
            this.isLiked ? this.like++ : this.like--;
        },
    };
};

const thumbs = () => {
    return {
        thumbUp: 0,
        isThumbUp: false,
        thumbDown: 0,
        isThumbDown: false,
        thumbUpHandler() {
            this.isThumbUp =! this.isThumbUp;
            if (this.isThumbUp) {
                this.thumbUp++;
                this.isThumbDown = false;
                if(this.thumbDown>0){
                    this.thumbDown--;
                }
            }else{
                this.thumbUp--;

            }
        },
        thumbDownHandler() {
            this.isThumbDown =! this.isThumbDown;
            if (this.isThumbDown) {
                this.thumbDown++;
                this.isThumbUp = false;
                if (this.thumbUp>0) {
                    this.thumbUp--
                }
            }else{
                this.thumbDown--;

            }
        },
    };
};

