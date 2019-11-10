const navTop = $('.top');
const video = $('.video__player').get(0);
const videoBtn = $('.video__btn');
const designSortProductsItems = $('.design__sort__products__items');
const designSortNavItems = $('.design__sort__nav__items');
const designSortNavLogo = $('.design__sort__nav__logo');

// スクロールメニュー
$(window).on('scroll', function() {
    let st = $(this).scrollTop();
    let actionPos = navTop.offset().top;
    if (st >= actionPos) {
        navTop.removeClass('top').addClass('fix');
    } else {
        navTop.removeClass('fix').addClass('top');
    }
});

// ビデオボタン再生
videoBtn.on('click',function(){
  $(this).hide();
  video.play();
});

// デザインソート
designSortNavItems.on('click', function(e) {
    e.preventDefault();
    var categoryType = $(this).data('type');
    designSortNavItems.removeClass('active select');
    $(this).addClass('active select');
    designSortProductsItems.hide();
    if (categoryType === 'all') {
        designSortProductsItems.show();
    } else {
        designSortProductsItems.each(function() {
            var _categoryType = $(this).data('type');
            if (categoryType === _categoryType) {
                $(this).show();
            }
        });
    }
});
designSortNavItems.hover(function() {
    let categoryType = $(this).data('type');
    let hasList = false;
    let nowSelect = $('.select');
    nowSelect.removeClass('active inactive');

    if (categoryType === 'all') {
        hasList = true;
    } else {
        designSortProductsItems.each(function() {
            let _categoryType = $(this).data('type');
            if (categoryType === _categoryType) {
                hasList = true;
            }
        });
    }
    if (hasList) {
        $(this).removeClass('inactive').addClass('active');
    } else {
        $(this).removeClass('active').addClass('inactive');
    }
    designSortNavLogo.removeClass('icon_all icon_facade icon_roof icon_wall icon_floor icon_window icon_door icon_stair icon_ramp icon_shelf icon_table icon_chair icon_plant').addClass('icon_' + categoryType);
    },function() {
        $(this).removeClass('active inactive');
        let nowSelect = $('.select');
        let categoryTypeSelect = nowSelect.data('type');
        let hasListSelect = false;

        if (categoryTypeSelect === 'all') {
            hasListSelect = true;
        } else {
            designSortProductsItems.each(function() {
                let _categoryTypeSelect = $(this).data('type');
                if (categoryTypeSelect === _categoryTypeSelect) {
                    hasListSelect = true;
                }
            });
        }
        if (hasListSelect) {
            nowSelect.removeClass('inactive').addClass('active');
        } else {
            nowSelect.removeClass('active').addClass('inactive');
        }
        designSortNavLogo.removeClass('icon_all icon_facade icon_roof icon_wall icon_floor icon_window icon_door icon_stair icon_ramp icon_shelf icon_table icon_chair icon_plant').addClass('icon_' + categoryTypeSelect);
    }
);
