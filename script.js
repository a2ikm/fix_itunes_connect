$(function(){
  var replaced = $("body").html()
    .replace(/“/g, '"')
    .replace(/”/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '<')
    .replace(/colspan=" 3"=""/g, 'colspan="3"')
    .replace(/onclick=""displayCountriesList\(\);&quot;"/g, 'onclick="displayCountriesList();"')
  $("body").html(replaced)
});
