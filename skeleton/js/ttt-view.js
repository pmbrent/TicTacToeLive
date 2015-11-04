(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    var that = this;
    $("li").on("click", function(e) {
      that.makeMove($(e.currentTarget));
    });
  };

  View.prototype.makeMove = function ($square) {
    if ($square.hasClass("x") || $square.hasClass("o")) {
      alert("Invalid move!");
    } else {
      if (this.game.currentPlayer == "x") {
        $square.addClass("x");
      } else {
        $square.addClass("o");
      }
      this.game.playMove($square.data("pos"));
    }
    if (this.game.board.isOver()) {
      $("li").off("click");
      var $msg = $("strong");

      if (this.game.board.winner() == "o") {

        $msg.addClass("winner_o");
      } else {
        $msg.addClass("winner_x");
      }
    };
  };

  View.prototype.setupBoard = function () {
    var $ul = $("<ul>");

    $("<li>").data("pos",[0,0]).appendTo($ul);
    $("<li>").data("pos",[0,1]).appendTo($ul);
    $("<li>").data("pos",[0,2]).appendTo($ul);
    $("<li>").data("pos",[1,0]).appendTo($ul);
    $("<li>").data("pos",[1,1]).appendTo($ul);
    $("<li>").data("pos",[1,2]).appendTo($ul);
    $("<li>").data("pos",[2,0]).appendTo($ul);
    $("<li>").data("pos",[2,1]).appendTo($ul);
    $("<li>").data("pos",[2,2]).appendTo($ul);

    $ul.addClass("ttt-grid group");
    this.$el.html($ul);
  };
})();
