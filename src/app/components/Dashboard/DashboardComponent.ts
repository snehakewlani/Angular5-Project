import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EventEmitter, Input, Output } from '@angular/core';
import { pagerService } from '../../services/pagerService';

@Component({
    selector: 'DashboardSelector',
    templateUrl: `./DashboardComponent.html`,
    styleUrls: [`./DashboardComponent.css`],
    providers: [pagerService]
})

export class DashboardComponent {

    //ppage = 4;
    constructor(private pagerService: pagerService) {
        this.setPage(1);
    }

    // array of all items to be paged
    // private allItems: any[];

    //pages: any[] = [1,2,3]
    allItems: any[] = [
        {
            "id": 101,
            "name": "Ink Refills",
            "imgSrc": "../../../assets/images/ink.jpg",
            "price": 500
        },
        {
            "id": 102,
            "name": "IDEE Eyewear",
            "imgSrc": "../../../assets/images/sunglass.jpg",
            "price": 4000
        },
        {
            "id": 103,
            "name": "Dining Table",
            "imgSrc": "../../../assets/images/dining.jpg",
            "price": 20000
        },
        {
            "id": 104,
            "name": "Raymond Blazer",
            "imgSrc": "../../../assets/images/blazer.jpg",
            "price": 6800
        },
        {
            "id": 105,
            "name": "Plants",
            "imgSrc": "../../../assets/images/plant1.jpg",
            "price": 1300
        },
        {
            "id": 106,
            "name": "Plants Stand",
            "imgSrc": "../../../assets/images/standPlant.jpg",
            "price": 2600
        },
        {
            "id": 107,
            "name": "Sofa Set",
            "imgSrc": "../../../assets/images/couch5.jpg",
            "price": 21090
        },
        {
            "id": 108,
            "name": "American Tourister Travel Bag set",
            "imgSrc": "../../../assets/images/travelGear.jpg",
            "price": 15000
        },
        {
            "id": 109,
            "name": "Women's Hoodie",
            "imgSrc": "../../../assets/images/hoodie.jfif",
            "price": 2109
        },
        {
            "id": 110,
            "name": "Recliner",
            "imgSrc": "../../../assets/images/recliner.jpeg",
            "price": 52000
        },
        {
            "id": 111,
            "name": "Giordano Watch",
            "imgSrc": "../../../assets/images/watch.jpg",
            "price": 2109
        },
        {
            "id": 112,
            "name": "Lounger",
            "imgSrc": "../../../assets/images/couch8.jpg",
            "price": 48000
        },


    ];


    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];



    // initialize to page 1


    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }



}