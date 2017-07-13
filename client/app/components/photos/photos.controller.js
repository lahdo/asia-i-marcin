class PhotosController {
  constructor($scope, photosService, angularGridInstance) {
    this.pics = [
        "assets/images/1.jpg",
        "assets/images/2.jpg",
        "assets/images/3.jpg",
        "assets/images/4.jpg",
        "assets/images/5.jpg",
        "assets/images/6.jpg",
        "assets/images/7.jpg",
        "assets/images/8.jpg",
        "assets/images/9.jpg",
        "assets/images/10.jpg",
        "assets/images/11.jpg",
        "assets/images/12.jpg",
        "assets/images/13.jpg",
        "assets/images/14.jpg",
        "assets/images/15.jpg",
        "assets/images/16.jpg",
        "assets/images/17.jpg",
        "assets/images/18.jpg",
        "assets/images/19.jpg",
        "assets/images/20.jpg"
    ];

    // photosService.getData()
    //   .then( (data) => {
    //     data.data.items.forEach(function (obj) {
    //       var desc = obj.description,
    //         width = desc.match(/width="(.*?)"/)[1],
    //         height = desc.match(/height="(.*?)"/)[1];
    //
    //       obj.actualHeight = height;
    //       obj.actualWidth = width;
    //     });
    //     this.pics = data.data.items;
    //
    //   }, function (error) {
    //     console.log(error);
    //   });

    this.refresh = function () {
      angularGridInstance.gallery.refresh();
    }
  }
}

PhotosController.$inject = ['$scope', 'photosService', 'angularGridInstance'];

export default PhotosController;
