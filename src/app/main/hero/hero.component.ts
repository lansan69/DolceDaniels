import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  active = 0;
  itemsGlossary = ['cafe','fresa','coco']

  items = [
    {
      name: 'cafe',
      link: 'https://articulo.mercadolibre.com.mx/MLM-1331151623-dolce-daniels-crema-cafe-chocolate-_JM#position=3&search_layout=stack&type=item&tracking_id=f41312ec-1b57-4aed-a932-09168d2bff0b',
      title: 'CAFE CHOCOLATE',
      color: '#7d5a50',
    },
    {
      name: 'fresa',
      link: 'https://articulo.mercadolibre.com.mx/MLM-1331164798-dolce-daniels-crema-pinon-fresa-_JM#position=18&search_layout=stack&type=item&tracking_id=f1288e53-5078-4d8c-b86b-5dc5b359f054',
      title: 'FRESA PIÑON',
      color: '#c78f98',
    },
    {
      name: 'coco',
      link: 'https://articulo.mercadolibre.com.mx/MLM-1331219773-dolce-daniels-crema-coco-pina-_JM#position=4&search_layout=stack&type=item&tracking_id=b4fd8920-00ff-49fa-bc16-3aea1721e499',
      title: 'PIÑA COCO',
      color: '#ffffff',
    }
  ];

  left(index: number, n: number): number {
    return (index - 1 + n) % n;
  }

  right(index: number, n: number): number {
    return (index + 1) % n;
  }

  calculateTotal(): number {
    const container = document.querySelector('.bottleImages-items') as HTMLDivElement;
    if (container) {
      const items = container.children.length; 
      return items;
    }
    return -1;
  }

  next(): void {
    this.active = this.right(this.active, this.calculateTotal());
    this.updateItems(0);
  }
  previous(): void {
    this.active = this.left(this.active, this.calculateTotal());
    this.updateItems(1);
  }

  updateItems(key:number): void {
    const items = document.querySelectorAll('.bottleImages-items .item');
    const previous = key == 0 ? this.left(this.active, this.calculateTotal()) : this.right(this.active, this.calculateTotal());
    const elementToHide = key == 0 ? this.left(previous,this.calculateTotal()) : this.right(previous, this.calculateTotal());
   
    items.forEach((item, index) => {
      item.classList.remove('left-700', 'right-700', 'active');
      if (index == this.right(this.active, this.calculateTotal())) {
        item.classList.add('left-700');
      } else if (index == this.left(this.active, this.calculateTotal())) {
        item.classList.add('right-700');
      }
      item.classList.add('active');
      
    });
    console.log('hide', this.itemsGlossary[elementToHide]);
    this.changeItemDescription(this.active);
  }

  changeItemDescription(index: number): void {
    const buttonHref = document.querySelector('.buyButton a') as HTMLAnchorElement;
    const itemDescription = document.querySelector('.bottleTitle2') as HTMLHeadingElement;
    const itemDescription1 = document.querySelector('.bottleTitle1') as HTMLHeadingElement;
    itemDescription.classList.remove('text-shadow', 'animate-title');
    void itemDescription.offsetWidth; 
    itemDescription.textContent = this.items[index].title;
    itemDescription.classList.add('animate-title');
    itemDescription1.classList.remove('text-shadow');
    if (itemDescription) {
      buttonHref.href = this.items[index].link;
      itemDescription.style.color = this.items[index].color;
      itemDescription1.style.color = this.items[index].color;
      if(this.itemsGlossary[index] == 'coco'){
        itemDescription.classList.add('text-shadow');
        itemDescription1.classList.add('text-shadow');
      }
      }
    }
  }