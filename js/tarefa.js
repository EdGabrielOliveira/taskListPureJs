var Tarefa = function(parent, parent_id, id, responsaveis){
    this.id = parent_id+"-tarefa-"+id;
    this.descricao = "";
    this.responsavel = null;
    this.prazo = null;
    this.parent = parent;

    this.create = function(){
        parent.append(`
            <li class="list-group-item" id='${this.id}'>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-6">
                                <h5 id='desc-${this.id}'>${this.descricao}</h5>
                            </div>
                            <div class='col-sm-6' style="text-align: right">
                                <button type='button' class='btn btn-danger btn-sm' id='btn-delete-${this.id}'>Excluir</button>
                            </div>
                        </div>
                        <div class="row" style="margin-top: 8px">
                            <div class="col-sm-5">
                                <p>Responsável:</p>
                            </div>
                            <div class="col-sm-7">
                                <select class="selectpicker_tarefa" data-width="fit" data-style="btn-warning" multiple>
                                </select>
                            </div>
                        </div>
                        <div class="row" style="margin-top: 3px">
                            <div class="col-sm-4">
                                <p>Prazo:</p>
                            </div>
                            <div class="col-sm-8" style="text-align: right">
                                <input type="date">
                            </div>
                        </div>            
                    </div>
                </div>     
            </li>
        `);
        
        $(`#btn-delete-${this.id}`).click(function(){
          this.delete();  
        }.bind(this));
        var renderResponsaveis = function (responsaveis) {
            $('.selectpicker_tarefa').selectpicker('val', responsaveis);
            for (r of responsaveis) {
                $('.selectpicker_tarefa').append(`
                <option style="font-size: 14px">${r}</option>
            `);
            }
            $('.selectpicker_tarefa').selectpicker('refresh');
        }.bind(this);
        renderResponsaveis(responsaveis);
        $('.selectpicker_tarefa').selectpicker('refresh');
    }

    this.setDescricao = function(value){
        this.descricao = value;
    }

    this.delete = function(){
        $(`#${this.id}`).remove();
    }
}