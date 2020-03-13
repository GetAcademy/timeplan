const model = {
    days: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'],
    timeSlots: ['09.00 - 10.00', '10.20 - 11.20', '12.00 - 13.00', '13.20 - 14.30'],
    events: [
        {
            name: 'Nøkkelkompetenser',
            shortName: 'NK',
            time: {
                day: 0,
                timeSlot: 0
            },
            module: 1,
            teachers: ['Eskil', 'Geir']
        },
        {
            name: 'Kodetime',
            shortName: 'KT',
            time: {
                day: 0,
                timeSlot: 1
            },
            module: 1,
            teachers: ['Terje']
        },
        {
            name: 'Nøkkelkompetenser/Kodetime',
            shortName: 'NK/KT',
            time: {
                day: 1,
                timeSlot: 0
            },
            module: 2,
            teachers: ['Geir', 'Eskil', 'Terje']
        },
        {
            name: 'Morramøte med teamet',
            shortName: 'NK/KT',
            time: {
                day: 1,
                timeSlot: 0
            },
            module: 1,
            teachers: []
        },
    ]
};