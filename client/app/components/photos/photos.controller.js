class PhotosController {
  constructor($scope, photosService, angularGridInstance) {
    this.pics = [];
    photosService.getData()
      .then( (data) => {
        data.data.items.forEach(function (obj) {
          var desc = obj.description,
            width = desc.match(/width="(.*?)"/)[1],
            height = desc.match(/height="(.*?)"/)[1];

          obj.actualHeight = height;
          obj.actualWidth = width;
        });
        this.pics = data.data.items;

      }, function (error) {
        console.log(error);
      });

    this.refresh = function () {
      angularGridInstance.gallery.refresh();
    }
  }
}

PhotosController.$inject = ['$scope', 'photosService', 'angularGridInstance'];

export default PhotosController;
