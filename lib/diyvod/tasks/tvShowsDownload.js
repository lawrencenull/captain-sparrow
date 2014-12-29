
var _ = require('lodash'),
q = require('q'),
winston = require('winston');

module.exports = TvShowsDownload;

function TvShowsDownload(
  settings, 
  episodesProvider,
  episodeDownloader) {
    this.settings = settings;
    this.episodesProvider = episodesProvider;
    this.episodeDownloader = episodeDownloader;
  }

  TvShowsDownload.prototype.execute = execute;
  TvShowsDownload.prototype.downloadEpisodes = downloadEpisodes;

  function execute () {
    var self = this;

    self.episodesProvider.getEpisodes()
    .then(function (episodes) { 
      return self.downloadEpisodes(episodes)
        .then(function (results) {

          results.forEach(function (result, i) {
            if (result.state === "fulfilled") {
              winston.info(episodes[i].show + ' ' + episodes[i].getEpisodeNumber() + ': OK');
            } else {
              var reason = result.reason;
              winston.info(episodes[i].show + ' ' + episodes[i].getEpisodeNumber() + ': ' + reason);
            }
          });

      });
    })
  }

  function downloadEpisodes (episodes) {
    var downloadPromises = _.map(episodes, function (episode) {
      return self.episodeDownloader.download(episode);
    });

    return q.allSettled(downloadPromises);
  }

