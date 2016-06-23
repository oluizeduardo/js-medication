var medicationService = (function () {

    // Local Storage's name.
    var _localStorageKey = 'medication';
    // Initialization of the list.
    var _medications = [];

    _loadMedication();

    function _loadMedication() {
        var str = window.localStorage[_localStorageKey] || '[]';
        _medications = JSON.parse(str);
    }

    // It returns the list of medication.
    function getMedications() {
        return _medications;
    }

    // Add a new medication.
    function addMedication(medication) {
        _medications.push(medication);
        window.localStorage[_localStorageKey] = JSON.stringify(_medications);
    }

    // Update a medication.
    function updateMedication(medication, index) {
        _medications[index] = medication;
        window.localStorage[_localStorageKey] = JSON.stringify(_medications);
    }

    // Public methods.
    return {
        getMedications: getMedications,
        addMedication: addMedication,
        updateMedication: updateMedication
    };
    
})();