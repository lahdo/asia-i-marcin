class DriveController {
  constructor(NgMap) {
    this.name = 'drive';

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }
}

DriveController.$inject = ['NgMap'];

export default DriveController;
