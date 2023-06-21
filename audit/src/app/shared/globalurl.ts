import { Directive, OnInit } from '@angular/core';

import configJson from 'src/assets/config/config.json'


@Directive()
export class GlobalUrl  implements OnInit{

    constructor() {
    }

    ngOnInit() {


    }

    public static ProductUrlMaster = configJson.ProductUrl;

    public static LoginUrlMaster = configJson.LoginUrl;

    public static GetProduct = GlobalUrl.ProductUrlMaster + '/Product';

    public static GetLogin = GlobalUrl.LoginUrlMaster + '/Login';
    

}
