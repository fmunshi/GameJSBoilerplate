require.config({
    paths: {
        jquery      : 'lib/jquery',
        underscore  : 'lib/underscore',
        gamejs      : 'lib/gamejs/gamejs',
    }
});

require(['jquery', 'gamejs', 'modules/main'], function($, gamejs, main) {
    console.warn('hi');
    // game init
    gamejs.ready(main);
});