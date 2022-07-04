import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js';

const app = createApp({
  data() {
    return {
      // web
      isOpen: false,
      isAnimate: false,
      isSuccess: false,
      WebFormModal: false,
      webForm: {
        user: {
          name: '',
          tel: '',
        }
      },
      bills: [
        {
          code: '',
          nowBuyShop: '',
        }
      ],
      buyShop: [
        {
          name: '7-11',
          nameEn: 'seven-eleven',
        },
        {
          name: '全家便利商店',
          nameEn: 'whole family',
        },
        {
          name: '萊爾富',
          nameEn: 'Hi-Life',
        },
        {
          name: '全聯福利中心',
          nameEn: 'Quanlian',
        },
        {
          name: '量販店',
          nameEn: 'mass merchandiser',
        },
        {
          name: '其他通路',
          nameEn: 'other pathways',
        },
      ],
      // line-liff
      nowLoginWay: 'modernQRcode',
      loginWay: [
        {
          name: '掃描電子發票',
          nameEn: 'modernQRcode',
        },
        {
          name: '手動輸入發票',
          nameEn: 'modernManual',
        },
      ],
      formModal: false,
      isQRCode: false,
      form: {
        user: {
          name: '',
          tel: '',
        },
      },
      bill: {
        number: '',
      },
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    goAnchor(title) {
      let target = title;
      let targetPosition = $(target).offset().top;
      this.isOpen = false;
      $('html,body').animate({
        scrollTop: targetPosition
      }, 700);
    },
    goTop() {
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    },
    initAos() {
      AOS.init({
        once: true,
      });
    },
    initSwiper() {
      new Swiper('.coupon-modal .swiper', {
        slidesPerView: 1,
        pagination: {
          el: '.coupon-modal .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.coupon-modal .swiper-button-next',
          prevEl: '.coupon-modal .swiper-button-prev',
        }
      });
    },
    addAnimate() {
      let innerHeight = window.innerHeight;
      $(window).scroll(() => {
        if ($(window).scrollTop() + innerHeight > $('.isHeartBeat').offset().top) {
          this.isAnimate = true;
        } else {
          this.isAnimate = false;
        }
      });
    },
    openModal(modal) {
      this.$refs[modal].classList.add('is-active');
      this.isOpen = false;
      $('body').addClass('overflow-hidden');
    },
    closeModal(modal) {
      this.$refs[modal].classList.remove('is-active');
      $('body').removeClass('overflow-hidden');
      if(modal === 'coupon') {
        this.isSuccess = false;
        this.WebFormModal = false;
      }
    },
    addBill() {
      this.bills.push({
        code: '',
        nowBuyShop: '',
      });
      this.addAnimate();
    },
    deleteBill() {
      if(this.bills.length > 1) {
        this.bills.pop();
      } 
    }, 
    numberToString(bill) {
      let text;
      if(bill === 1) {
        text = '一';
      }
      else if(bill === 2) {
        text = '二';
      }
      else if(bill === 3) {
        text = '三';
      }
      else if(bill === 4) {
        text = '四';
      }
      else if(bill === 5) {
        text = '五';
      }
      return text;
    },
    webSendForm() {
      if (this.webForm.user.name === '' || this.webForm.user.tel === '') {
        this.WebFormModal = true;
        this.isSuccess = false;
      } else {
        this.WebFormModal = true;
        this.isSuccess = true;
        this.webForm = {
          user: {
            name: '',
            tel: '',
          }
        }
      }
    },
    closeWebFormModal() {
      this.WebFormModal = false;
    },
    sendForm() {
      if (this.form.user.name === '' || this.form.user.tel === '' || bill.number === '') {
        this.formModal = true;
      }
    },
    closeFormModal() {
      this.formModal = false;
    },
  },
  mounted() {
    this.initSwiper();
    this.addAnimate();
    $(window).on('load', () => {
      setTimeout(() => {
        $('.loading').addClass('is-active');
        setTimeout(() => {
          this.initAos();
        }, 800);
      },1000);
    })
  },
});
app.mount('#app');