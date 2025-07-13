document.getElementById("header_img_button_search_submit").onclick = function() {
  var input = document.getElementById("header_input_search").value;
  var search = input.toLowerCase();
  
  if(search == "Original Sun Station") {
    window.location = "https://www.youtube.com/channel/UCVOoUEQaFXVblY6wF1vg_WQ";
  }
  if(search == "youtube") {
    window.location = "https://www.youtube.com/channel/UCVOoUEQaFXVblY6wF1vg_WQ";
  }
  if(search == "tiktok") {
    window.location = "https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1";
  }
  if(search == "logo") {
    window.location = "https://cdn.glitch.global/9a8d4922-5a78-47fa-a7bb-ec34d1d8765b/sun_station_logo.png?v=1647326957013";
  }
  if(search == "https://cdn.glitch.global/9a8d4922-5a78-47fa-a7bb-ec34d1d8765b/sun_station_logo.png?v=1647326957013") {
    window.location = "https://cdn.glitch.global/9a8d4922-5a78-47fa-a7bb-ec34d1d8765b/sun_station_logo.png?v=1647326957013";
  }
  if(search == "trang chủ") {
    window.location = "../../index.html";
  }
  if(search == "home") {
    window.location = "../../index.html";
  }
  if(search == "index.html") {
    window.location = "../../index.html";
  }
  if(search == "thông báo") {
    window.location = "../../notification.html";
  }
  if(search == "notification.html") {
    window.location = "../../notification.html";
  }
  if(search == "trò chơi") {
    window.location = "../../game.html";
  }
  if(search == "game.html") {
    window.location = "../../game.html";
  }
  if(search == "video") {
    window.location = "../../video.html";
  }
  if(search == "video.html") {
    window.location = "../../video.html";
  }
  if(search == "ảnh") {
    window.location = "../../image.html";
  }
  if(search == "image.html") {
    window.location = "../../image.html";
  }
  if(search == "bài viết") {
    window.location = "../../post.html";
  }
  if(search == "post.html") {
    window.location = "../../post.html";
  }
  if(search == "bài viết hướng dẫn") {
    window.location = "../../post/tutorial/tutorial.html";
  }
  if(search == "post/tutorial/tutorial.html") {
    window.location = "../../post/tutorial/tutorial.html";
  }
  if(search == "phim") {
    window.location = "../../film.html";
  }
  if(search == "kịch bản phim") {
    window.location = "../../film_script.html";
  }
  if(search == "sunfilm154") {
    window.location = "../../film_script/sunfilm154/";
  }
  if(search == "hướng dẫn sử dụng website") {
    window.location = "../../post/tutorial/Cach-su-dung-website-chinh-cua-sun-station.html";
  }
  if(search == "cách sử dụng website chính của sun station") {
    window.location = "../../post/tutorial/Cach-su-dung-website-chinh-cua-sun-station.html";
  }
  if(search == "Cách sử dụng Website Chính của Sun Station") {
    window.location = "../../post/tutorial/Cach-su-dung-website-chinh-cua-sun-station.html";
  }
  if(search == "home/main.js") {
    window.location = "../../home/main.js";
  }
  if(search == "shared_file/shared.js") {
    window.location = "../../shared_file/shared.js";
  }
  if(search == "in4 1542138227") {
    window.location = "../../ifmt_in4_information_1542138227.html";
  }
  if(search == "nb g") {
    window.location = "https://forms.gle/gHb5PpM7sg92i4nQ8";
  }
  if(search == "https://tabby-eager-quark.glitch.me/search/index.html") {
    window.location = "../../search/index.html";
  }
  if(search == "find on page") {
    window.location = "../../search/index.html";
  }
  if(search == "search on page") {
    window.location = "../../search/index.html";
  }
  if(search == "fop") {
    window.location = "https://tabby-eager-quark.glitch.me/search/index.html";
  }
  if(search == "sop") {
    window.location = "https://tabby-eager-quark.glitch.me/search/index.html";
  }
  
  // Chức năng tìm kiếm file trang: Start
  
  if(search.includes("t//")) {
    window.location.href = search.replace("t//", "https://tabby-eager-quark.glitch.me/");
  }
  if(search.includes("t// ")) {
    window.location.href = search.replace("t// ", "https://tabby-eager-quark.glitch.me/");
  }
  
  // Chức năng tìm kiếm file trang: End
}