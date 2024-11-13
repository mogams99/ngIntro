import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'search-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  query:any;

  constructor(private route:ActivatedRoute){};
  
  ngOnInit(){
  this.route.queryParams.subscribe((p)=>{
      this.query=p;
      console.log(p);
  });
}
  
}
