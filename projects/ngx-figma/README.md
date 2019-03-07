# ngx-figma

Angular component to render [Figma live embeds](https://help.figma.com/article/93-figma-live-embed).

## Install

```
npm install @gilluan/ngx-figma --save // OR
yarn add @gilluan/ngx-figma
```

## Getting Started

Ensure you import the module and the dependencies:

```js
import { NgxFigmaModule } from '@gilluan/ngx-figma';

@NgModule({
   imports: [
       NgxFigmaModule, 

       ...OtherModules 
   ] // along with your other modules
})
export class AppModule {}
```

### Basic Example

```js
@Component({
    selector: 'app',
    template: `
    <ngx-figma
      url="https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File">
    </ngx-figma>
    `
});
export class App {

}
```

### Using height and width Example

```js
@Component({
    selector: 'app',
    template: `
    <ngx-figma
      height="600"
      width="800"
      url="https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File">
    </ngx-figma>
    `
});
export class App {}
```
