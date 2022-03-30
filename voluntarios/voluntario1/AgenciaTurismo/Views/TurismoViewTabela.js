class TurismoViewTabela {
    constructor(){
        this._DomTable = document.querySelector(".Lista");
    }

    _template(model){
        
        return `
            <table>
                <tr>
                <th>Country</th>
                <th>City</th>
                <th>People</th>
                <th>Salário</th>
                <th>Aeroporto</th>
                <th>Apagar</th>
                </tr>
                <tbody>
                    ${model.map(n => 
                        `
                        <tr>
                            <td>${n.country}</td>
                            <td>${n.city}</td>
                            <td>${n.people}</td>
                            <td>${n.salary}</td>
                            <td>${n.airport}</td>
                            <td><button onclick="controller.removeChield(event, ${n.id})">Apagar</button></td>
                        </tr>  
                        `
                    ).join('')}

                </tbody>
                <tfoot>
                    <td colspan="3"></td>
                        <td>
                            ${model.reduce((total, n) => total = (total + parseFloat(n.salary)), 0.0)}
                        </td>
                </tfoot>
            </table>
    `
    }

    update(model){
        this._DomTable.innerHTML = this._template(model);
    }
}