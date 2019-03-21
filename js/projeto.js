var Projeto = function(parent, id){

    this.id = 'projeto-'+id;
    this.descricao = "";
    this.parent = parent;

    this.create = function(){
        parent.append(`
            <div id="${this.id}" class="card">
                <div class="card-header" id="headingOne">
                    <div class="row">
                        <div class="col-sm-6">
                            <h3 class="mb-0">
                                <button class="btn btn-link" style="font-size: 18px" data-toggle="collapse" data-target="#collapse-${this.id}" aria-expanded="true" aria-controls="collapse-${this.id}">
                                ${this.descricao}
                                </button>
                            </h3>
                        </div>
                        <div class="col-sm-6" style="text-align: right">
                            <button type='button' class='btn btn-danger btn-sm' style="font-size: 18px" id='btn-delete-${this.id}'>Excluir</button>
                        </div>
                    </div>
                </div>
            
                <div id="collapse-${this.id}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <div class="col-sm-12" style="padding: 1px">
                            <div class="row">
                                <div class="col-sm-2">
                                    <h4>${this.descricao}</h4>
                                </div>
                                <div class="col-sm-3">
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#criarTarefa-${this.id}">Criar tarefa</button>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="card-body" style="background-color: #cfcfcf;  padding: 8px">
                                                <div class="card-title">
                                                    <h4>Fazer</h4>
                                                </div>
                                                <ul id="${this.id}-tarefa-todo" class="list-group connectedSortable" style="height: 450px; overflow: auto;">
                                                
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="card-body" style="background-color: #627fff;  padding: 8px">
                                                <div class="card-title">
                                                    <h4>Fazendo</h4>
                                                </div>
                                                <ul id="${this.id}-tarefa-doing" class="list-group connectedSortable" style="height: 450px; overflow: auto;">
                                                    
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="card-body" style="background-color: #3ab864;  padding: 8px">
                                            <div class="card-title">
                                                    <h4>Finalizado</h4>
                                                </div>
                                                <ul id="${this.id}-tarefa-done" class="list-group connectedSortable" style="height: 450px; overflow: auto;">
                                                    
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script type="text/javascript">
                                $( function() {
                                    $("#${this.id}-tarefa-todo, #${this.id}-tarefa-doing, #${this.id}-tarefa-done").sortable({
                                    connectWith: ".connectedSortable"
                                    }).disableSelection();
                                });
                            </script>
                        </div>
                    </div>
                </div>
            </div>
    
            <div id="criarTarefa-${this.id}" class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title">Criar Tarefa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body" style="text-align: center">
                        <p>Descrição: <span><input type="text" id="tarefaDesc-${this.id}" required></span></p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-primary" 
                            onclick="return criarTarefa('${this.id}', $('#tarefaDesc-${this.id}').val()); $('#tarefaDesc').val(null)" 
                            data-dismiss="modal">Criar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Sair</button>
                        </div>
                    </div>
                </div>
            </div>
        `);

        $(`#btn-delete-${this.id}`).click(function(){
            this.delete();  
          }.bind(this));
    }

    this.setDescricao = function(value){
        this.descricao = value;
    }

    this.delete = function(){
        $(`#${this.id}`).remove();
    }
}