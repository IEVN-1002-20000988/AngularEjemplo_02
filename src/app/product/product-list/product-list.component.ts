import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imageWidth:number=50
  imageMargin:number=2
  muestraImg:boolean=true
  listFilter:string=''

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"Febrero 3 2020",
      "Precio":12000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "imagenURL":"https://th.bing.com/th/id/OIP.m9fnUigUrxi8SaR-okaTbQHaFj?pid=ImgDet&rs=1"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"Marzo 5 2022",
      "Precio":18000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenURL":"https://th.bing.com/th/id/R.a7fd283da914b7dceceb13fa3465999a?rik=ZBXMpd1WstrmAg&pid=ImgRaw&r=0"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"Enero 2 2023",
      "Precio":200000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenURL":"https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/rio-sd-bn/caracteristicas/Componente-RioSD_LX.png"
    }
  ]

}
