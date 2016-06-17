var medicationService = (function () {

    var _localStorageKey = 'medication';

    var _medications = [];

    _loadMedication();

    return {
        getMedications: getMedications,
        addMedication: addMedication
    };

    function _loadMedication() {
        var str = window.localStorage[_localStorageKey] || '[]';
        _medications = JSON.parse(str);
    }

    function getMedications() {
        return _medications;
    }

    function addMedication(medication) {
        _medications.push(medication);
        window.localStorage[_localStorageKey] = JSON.stringify(_medications);
    }

})();