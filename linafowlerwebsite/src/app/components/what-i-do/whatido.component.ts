import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-whatido',
  templateUrl: './whatido.component.html',
  styleUrls: ['./whatido.component.scss']
})
export class WhatidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    })
  }

}
