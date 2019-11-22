import { Component, OnInit, Input } from '@angular/core';
import { Sail } from 'src/app/shared/sellersails.module';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-sail-item',
  templateUrl: './sail-item.component.html',
  styleUrls: ['./sail-item.component.css']
})
export class SailItemComponent implements OnInit {
  image:any;
  constructor(private serverService:ServerService) { }

  @Input () Sail:Sail;
  @Input () index:number;
  ngOnInit() {
       this.image=this.serverService.rootUrl+this.Sail.productPicture
  }

}
