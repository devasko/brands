window.onload =function () {

    const header = document.querySelector( 'header' );

    window.addEventListener( 'scroll', function () {
        header.classList.toggle( 'sticky', window.scrollY > 0 )
    });
    
    $( '.toggle, .nav__link' ).on( 'click', function () {
        header.classList.toggle( 'active' );
    })

        // if ( $( window ).width() > 992) {
            // $( 'nav__link' ).on( 'click' )
        // }

};



// window.onload =function () {
//
//     const header = document.querySelector( 'header' );
//
//     if ( $( window ).width() > 992) {
//         window.addEventListener( 'scroll', function () {
//             header.classList.toggle( 'sticky', window.scrollY > 0 )
//         });
//     }
//
//     $( '.toggle' ).on( 'click', function () {
//         header.classList.toggle( 'active' );
//     })
// };