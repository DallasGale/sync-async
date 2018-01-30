console.log('test');

// async example
const xhr = new XMLHttpRequest();
      xhr.open('GET', 'docs/hello.txt');
      xhr.send();
      xhr.onload = function() {
        console.log('hello.txt: ', this.response);
      };
