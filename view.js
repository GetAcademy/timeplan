function show(){
    document.getElementById('content').innerHTML = `
        <table>
            <tr class="colored">
                <th></th>
                ${model.days.map(d=>`
                <th>${d}</th>
                `).join('')}
            </tr>
            ${createHtmlForTimeSlot(0)}
            <tr class="colored">
                <th>10.00 - 10.20</th>
                <th colspan="5">FELLESPAUSE</th>
            </tr>
            ${createHtmlForTimeSlot(1)}
            <tr class="colored">
                <th>11.20 - 12.00</th>
                <th colspan="5">LUNSJ</th>
            </tr>
            ${createHtmlForTimeSlot(2)}
            <tr class="colored">
                <th>13.00 - 13.20</th>
                <th colspan="5">FELLESPAUSE</th>
            </tr>
            ${createHtmlForTimeSlot(3)}
        </tabl>
    `;
}

// function createHtmlForTimeSlot(timeSlot){
//     const dayNos = Array.from(model.days.keys());
//     return `<tr><th>${model.timeSlots[timeSlot]}</th>${
//         dayNos.map(dayNo=> `
//             <td>
//                 <ul>
//                     ${ eventsForDayAndTime(dayNo, timeSlot).map( event => `         
//                     <li>
//                         ${event.name} (${event.teachers.join(', ')})
//                     </li>
//                     `).join('') } 
//                 </ul>
//             </td>
//             `).join('') }
//          <tr>`;
// }

function eventsForDayAndTime(dayNo, timeSlot){
    return model.events.filter(
        event => event.time.day === dayNo && event.time.timeSlot === timeSlot
    );
}

function createHtmlForTimeSlot(timeSlot){
    let daysHtml = '';
    for(let dayNo = 0; dayNo < 5; dayNo++){
        let events = model.events.filter(
            event => event.time.day === dayNo && event.time.timeSlot === timeSlot
        );
        daysHtml += `<td><ul>${ events.map( event => `         
            <li>
                ${event.name} (${event.teachers.join(', ')})
            </li>
        `).join('') } </ul></td>`;
    }

    return `<tr><th>${model.timeSlots[timeSlot]}</th>${daysHtml}<tr>`;
}



    // for(let dayName of model.days)
    // {
    //     html += `<th>${dayName}</th>`;
    // }
    // html += `</tr>`;
