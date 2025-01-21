# docsify-img-grid

> A docsify plugin to transform consecutive image lists into responsive grid galleries.

## Features

- Automatically converts lists of 3 or more images into a responsive grid layout
- Customizable number of columns
- Responsive design that adapts to different screen sizes
- Simple and lightweight implementation
- No additional dependencies required

## Installation

Add the following script to your docsify index.html:

```html
<script src="//unpkg.com/docsify-img-grid/dist/docsify-img-grid.min.js"></script>
```

## Usage

Simply create a list of images in your markdown:

```markdown
- ![image1](path/to/image1.jpg)
- ![image2](path/to/image2.jpg)
- ![image3](path/to/image3.jpg)
```

The plugin will automatically transform consecutive image lists into a grid layout.

## Configuration

You can configure the plugin by adding settings to your docsify configuration:

```javascript
window.$docsify = {
    imgGrid: {
        columns: 3, // Default number of columns
        minItems: 3 // Minimum number of items to create a grid
    }
}
```

## Examples


### 3 

* ![v](https://fakeimg.pl/400x400?text=V) 
* ![w](https://fakeimg.pl/400x400?text=W)
* ![x](https://fakeimg.pl/400x400?text=X)


### 6 

* ![v](https://fakeimg.pl/400x400?text=V) 
* ![w](https://fakeimg.pl/400x400?text=W)
* ![x](https://fakeimg.pl/400x400?text=X)
* ![v](https://fakeimg.pl/400x400?text=V) 
* ![w](https://fakeimg.pl/400x400?text=W)
* ![x](https://fakeimg.pl/400x400?text=X)


### 5

* ![v](https://fakeimg.pl/400x400?text=V) 
* ![w](https://fakeimg.pl/400x400?text=W)
* ![x](https://fakeimg.pl/400x400?text=X)
* ![v](https://fakeimg.pl/400x400?text=V) 
* ![w](https://fakeimg.pl/400x400?text=W)

### with links

* [![Membre_V]( https://fakeimg.pl/400x400?text=V)](membre_v/)
* [![Membre_W]( https://fakeimg.pl/400x400?text=W)](membre_w/)
* [![Membre_X]( https://fakeimg.pl/400x400?text=X)](membre_x/)
* [![Membre_Y]( https://fakeimg.pl/400x400?text=Y)](membre_y/)
* [![Membre_Z]( https://fakeimg.pl/400x400?text=Z)](membre_Z/)

