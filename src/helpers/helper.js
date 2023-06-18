import moment from 'moment';
moment.locale('en');

class Helper {
    slugToLabel(str) {
        if (!str || str == '' || typeof str === 'undefined' || typeof str === null ) {
          return "-"
        } else {
            str = str.replace("_", " ")
            return str.replace(
                /\w\S*/g,
                function(txt) {
                  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
              );
        }

    }
    valueCheck(value) {
        if (!value || value == '' || typeof value === 'undefined' || typeof value === null ) {
            return "-"
        } else {
            return value
        }
    }
    dayFullFormat(date) {
        return moment(date).format('DD MMMM YYYY')
    }
    dateRegularFormat(date) {
        return moment(date).format('YYYY-MM-DD')
    }
    dateTimeRegularFormat(date) {
        return moment(date).format('YYYY-MM-DD HH:mm')
    }
    setRupiah(value) {
        let val = (value / 1).toFixed(2).replace('.', ',')
        return 'Rp' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    formatDateHumanize(value) {
        if (value) {
            return moment(String(value)).fromNow();
        } else {
            return "-"
        }
    }
}
export default new Helper();
