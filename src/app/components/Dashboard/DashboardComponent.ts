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
            "name": "Rayban Eyewear",
            "imgSrc": "../../../assets/images/eyeWear.jpg",
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
            "name": "Gradening Tools",
            "imgSrc": "../../../assets/images/garden.jpg",
            "price": 230
        },
        {
            "id": 107,
            "name": "Couch",
            "imgSrc": "../../../assets/images/couch6.jpg",
            "price": 21090
        },
        {
            "id": 108,
            "name": "Honda Civic",
            "imgSrc": "../../../assets/images/car.jpg",
            "price": 800000
        }

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