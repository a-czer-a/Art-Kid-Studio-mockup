document.addEventListener('DOMContentLoaded', function() {
    // Sidenav
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Materialbox
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);

    // Parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);

    // Tabs
    var tabs = document.querySelectorAll('.tabs')
    for (var i = 0; i < tabs.length; i++){
        M.Tabs.init(tabs[i]);
    }

    // Datepicker
    var elems = document.querySelectorAll('.datepicker');
    var options = {
        i18n: {
        months: [
            'Styczeń',
            'Luty',
            'Marzec',
            'Kwiecień',
            'Maj',
            'Czerwiec',
            'Lipiec',
            'Sierpień',
            'Wrzesień',
            'Październik',
            'Listopad',
            'Grudzień'
          ],
          monthsShort: [
            'Sty',
            'Lut',
            'Mar',
            'Kwie',
            'Maj',
            'Czer',
            'Lip',
            'Sier',
            'Wrze',
            'Paź',
            'Lis',
            'Gru'
          ],
          weekdays: [
            'Niedziela',
            'Poniedziałek',
            'Wtorek',
            'Środa',
            'Czwartek',
            'Piątek',
            'Sobota'
          ],
          weekdaysShort : [
            'Nie',
            'Pon',
            'Wt',
            'Śr',
            'Czw',
            'Pią',
            'Sob'
          ],
          weekdaysAbbrev: ['N','P','W','Ś','C','P','S']
        }
    }
    var instances = M.Datepicker.init(elems, options);    

    // Tooltips
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);

    // Scrollspy
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
  });
