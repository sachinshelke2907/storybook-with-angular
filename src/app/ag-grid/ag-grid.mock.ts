export const simpleGridColumn = [
    {
        headerName: "Fund", field: "fund",  minWidth: 180, maxWidth: 180,
         sortingOrder: ['asc', 'desc'], 
    },
    { headerName: "Daily Book P&L", cellClass: "", field: "daily_book_pl", sortingOrder: ['asc', 'desc'], minWidth: 180 },
    { headerName: "Product Type", field: "product_type", sortingOrder: ['asc', 'desc'], minWidth: 180 },
    { headerName: "MTD Book P&L", field: "mtd_book_pl", sortingOrder: ['asc', 'desc'], minWidth: 170 },
    
    { headerName: "YTD Book P&L", field: "ytd_book_pl", sortingOrder: ['asc', 'desc'], minWidth: 170 },
    { headerName: "End Book NAV", field: "end_book_nav", sortingOrder: ['asc', 'desc'], minWidth: 170 },
   
];

export const simpleGridRowData = [
    { fund: "Arymflp", daily_book_pl: '148,579,476', product_type: "Swaption", mtd_book_pl: "148,579,476", ytd_book_pl: "148,579,476", end_book_nav: '255,080,079'},
    { fund: "Aryehuslp", daily_book_pl: '148,579,476', product_type: "Swaption", mtd_book_pl: "148,579,476", ytd_book_pl: "148,579,476", end_book_nav: '255,080,079'},
    { fund: "Arymflp", daily_book_pl: '148,579,476', product_type: "Swaption", mtd_book_pl: "148,579,476", ytd_book_pl: "148,579,476", end_book_nav: '255,080,079'},
    { fund: "Arymflp", daily_book_pl: '148,579,476', product_type: "Swaption", mtd_book_pl: "148,579,476", ytd_book_pl: "148,579,476", end_book_nav: '255,080,079'},
    { fund: "Arymf", daily_book_pl: '148,579,476', product_type: "Swaption", mtd_book_pl: "148,579,476", ytd_book_pl: "148,579,476", end_book_nav: '255,080,079'},
    { fund: "Aryehcaptrust", daily_book_pl: '148,579,476', product_type: "Swaption", mtd_book_pl: "148,579,476", ytd_book_pl: "148,579,476", end_book_nav: '255,080,079'}
   
    
];