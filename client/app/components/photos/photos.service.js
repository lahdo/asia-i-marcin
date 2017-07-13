export default class photosService {
  constructor($q, $http, $sce) {
    this.$http = $http;
    this.url = 'https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
    this.src = $sce.trustAsResourceUrl(this.url);
  }

  getData() {
    return this.$http({
      method: 'GET',
      url: this.src
    });
  }
}

photosService.$inject = ['$q', '$http', '$sce'];
