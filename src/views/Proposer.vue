<template>
        <section class="grid page-porter-container">
        <Breadcrumb :home="home" :model="items" />

        <div class="breadcrumb-aligner"></div>


        <form style="margin-bottom:150px">
            <Message id="message" v-if="success" severity="success">
                <div class="ml-5">
                    <p style="font-weight:1000;">Félicitations ! Votre annonce a été transmise à nos services.</p>
                    <p>Un mail de confirmation vous sera envoyé dans quelques minutes. 
                        <br> Vous pouvez également consulter vos annonces dans 
                        <span style="font-weight:1000; text-decoration:underline;">« Mes annonces » .</span>
                    </p>
                </div>
            </Message>       
            <div class="card">
                <h1 style="font-size:2rem;">Votre trajet</h1>
                <div class="formPart formgrid grid">
                    <div class="formPartRow field col-12 md:col-4">
                        <label for="datepicker">Date de départ/arrivé</label>
                        <Calendar v-on:focusout="toggleForm2" id="datepicker" v-model="value" :showIcon="true" selectionMode="range" />
                    </div>
                    <div class="formPartRow field col-12 md:col-4">
                        <label for="timeD">Heure départ</label>
                        <Calendar v-on:focusout="toggleForm2" id="timeD" v-model="timeD" :timeOnly="true" :showIcon="true" hourFormat="24" />
                    </div>
                    <div class="formPartRow field col-12 md:col-4">
                        <label for="timeA">Heure arrivée</label>
                        <Calendar v-on:focusout="toggleForm2" id="timeA" v-model="timeA" :timeOnly="true" :showIcon="true" hourFormat="24" />
                    </div>
                    
                    <div class="formPartRow field col-12 md:col-6 locomotion">
                        
                        <span style="margin-right:20px;">Locomotion: </span>
                        <div class="field-radiobutton">
                            
                            <label class="form-check-label" for="airplane">
                                <img style="width:24px; height:24px;" src="../assets/images/airplane.png" alt="Avion">
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="airplane" name="locomotion" value="airplane" v-model="locomotion" />
                        </div>

                        <div class="field-radiobutton">
                            <label class="form-check-label" for="car">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path
                                d="M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z" />
                                </svg>
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="car" name="locomotion" value="car" v-model="locomotion" />
                        </div>

                        <div class="field-radiobutton">
                            <label class="form-check-label" for="bike">
                                <svg width="24" height="24"
                                xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path
                                d="M8.141 11.624l-.653-.519c-.395-.312-.477-.878-.187-1.291l2.474-3.519c.237-.337.7-.42 1.04-.186l4.185 2.884h1.5c.31 0 .5.259.5.5 0 .276-.224.5-.5.5h-.728l1.3 2.393c.593-.248 1.244-.386 1.928-.386 2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5c0-1.72.87-3.237 2.193-4.138l-1.563-2.877-2.541-.782-.872 1.309 2.287 2.948c.179.231.216.535.122.811-.338.994-1.201 3.429-1.567 4.398-.09.244-.351.38-.604.316l-.023-.006c-.286-.071-.46-.347-.42-.637.156-1.159.573-3.986.573-3.986l-2.659-2.109-.674.957c1.07.917 1.748 2.277 1.748 3.796 0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c.883 0 1.712.229 2.433.632l.708-1.008zm-1.288 1.831c-.554-.291-1.185-.455-1.853-.455-2.208 0-4 1.792-4 4s1.792 4 4 4c2.207 0 4-1.792 4-4 0-1.18-.512-2.241-1.326-2.974l-1.779 2.529c.067.133.105.285.105.445 0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1l.061.002 1.792-2.547zm9.821.292c-1.014.726-1.674 1.913-1.674 3.253 0 2.208 1.792 4 4 4s4-1.792 4-4-1.792-4-4-4c-.511 0-.998.096-1.447.27l1.483 2.731c.535.019.964.459.964.999 0 .552-.448 1-1 1s-1-.448-1-1c0-.194.056-.377.152-.53l-1.478-2.723zm-3.597-11.747c1.147 0 2.077.931 2.077 2.077 0 1.147-.93 2.077-2.077 2.077-1.146 0-2.077-.93-2.077-2.077 0-1.146.931-2.077 2.077-2.077z" />
                                </svg>
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="bike" name="locomotion" value="bike" v-model="locomotion" />
                        </div>

                        <div class="field-radiobutton">
                            <label class="form-check-label" for="trotinette"> <img src="../assets/images/trottinette2.png" alt="Trotinette"
                                style="width:24px; height:24px;"> 
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="trotinette" name="locomotion" value="trotinette" v-model="locomotion" />
                        </div>

                        <div class="field-radiobutton">
                            <label class="form-check-label" for="train"> <img src="../assets/images/train-svg.png" alt="Train" style="width:24px; height:24px;"> 
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="train" name="locomotion" value="train" v-model="locomotion" />
                        </div>

                        <div class="field-radiobutton">
                            <label class="form-check-label" for="moto"> <img src="../assets/images/moto-svg.png" alt="Moto" style="width:24px; height:24px;"> </label>
                            <RadioButton v-on:change="toggleForm2" id="moto" name="locomotion" value="moto" v-model="locomotion" />
                        </div>

                        <div class="field-radiobutton">
                            <label class="form-check-label" for="boat"> <img src="../assets/images/boat-svg.png" alt="Bâteau" style="width:24px; height:24px;"> </label>
                            <RadioButton v-on:change="toggleForm2" id="boat" name="locomotion" value="boat" v-model="locomotion" />
                        </div>
                        <div class="field-radiobutton">
                            <label class="form-check-label" for="bus">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd" clip-rule="evenodd">
                                <path
                                d="M6 24h-2c-.552 0-1-.448-1-1v-1c-.53 0-1.039-.211-1.414-.586s-.586-.884-.586-1.414v-8c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1v-4c0-1.657 1.343-3 3-3h16c1.657 0 3 1.343 3 3v4c.552 0 1 .448 1 1v3c0 .552-.448 1-1 1v8c0 .53-.211 1.039-.586 1.414s-.884.586-1.414.586v1c0 .552-.448 1-1 1h-2c-.552 0-1-.448-1-1v-1h-10v1c0 .552-.448 1-1 1zm-1.5-7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm15 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5 1h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm6.5-12.5c0-.276-.224-.5-.5-.5h-17c-.276 0-.5.224-.5.5v8.5s3.098 1 9 1 9-1 9-1v-8.5zm-5-3.5h-8v1h8v-1z" />
                                </svg>
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="bus" name="locomotion" value="bus" v-model="locomotion" />
                        </div>
                    
                    
                    </div>
                    <div class="formPartRow field col-12 md:col-6 locomotion">
                        
                        <span style="margin-right:20px;">Type d'enlevement: </span>

                        <div class="field-radiobutton">
                            <label class="form-check-label" for="PR">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                    clip-rule="evenodd">
                                    <path
                                    d="M7 24h-5v-9h5v1.735c.638-.198 1.322-.495 1.765-.689.642-.28 1.259-.417 1.887-.417 1.214 0 2.205.499 4.303 1.205.64.214 1.076.716 1.175 1.306 1.124-.863 2.92-2.257 2.937-2.27.357-.284.773-.434 1.2-.434.952 0 1.751.763 1.751 1.708 0 .49-.219.977-.627 1.356-1.378 1.28-2.445 2.233-3.387 3.074-.56.501-1.066.952-1.548 1.393-.749.687-1.518 1.006-2.421 1.006-.405 0-.832-.065-1.308-.2-2.773-.783-4.484-1.036-5.727-1.105v1.332zm-1-8h-3v7h3v-7zm1 5.664c2.092.118 4.405.696 5.999 1.147.817.231 1.761.354 2.782-.581 1.279-1.172 2.722-2.413 4.929-4.463.824-.765-.178-1.783-1.022-1.113 0 0-2.961 2.299-3.689 2.843-.379.285-.695.519-1.148.519-.107 0-.223-.013-.349-.042-.655-.151-1.883-.425-2.755-.701-.575-.183-.371-.993.268-.858.447.093 1.594.35 2.201.52 1.017.281 1.276-.867.422-1.152-.562-.19-.537-.198-1.889-.665-1.301-.451-2.214-.753-3.585-.156-.639.278-1.432.616-2.164.814v3.888zm3.79-19.913l3.21-1.751 7 3.86v7.677l-7 3.735-7-3.735v-7.719l3.784-2.064.002-.005.004.002zm2.71 6.015l-5.5-2.864v6.035l5.5 2.935v-6.106zm1 .001v6.105l5.5-2.935v-6l-5.5 2.83zm1.77-2.035l-5.47-2.848-2.202 1.202 5.404 2.813 2.268-1.167zm-4.412-3.425l5.501 2.864 2.042-1.051-5.404-2.979-2.139 1.166z" />
                                </svg>
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="PR" name="enlevement" value="PR" v-model="enlevement" />
                        </div>
                        <div class="field-radiobutton">
                            <label class="form-check-label" for="handshake">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                d="M0 15.562l1.932-7.562 3.526.891-1.974 7.562-3.484-.891zm18.415.902c.125.287.187.598.155.91-.079.829-.698 1.448-1.457 1.602-.254.533-.733.887-1.285 1.002-.244.512-.722.89-1.296 1.01-.325.668-.97 1.012-1.674 1.012-.516 0-1.004-.183-1.356-.538-.928.404-1.902-.048-2.232-.863-.596-.068-1.107-.452-1.332-.997-.599-.071-1.114-.458-1.34-1.003-1.188-.138-1.848-1.44-1.198-2.495-.233-.058-.494-.104-.751-.152l.383-1.464c.524.1 1.01.219 1.453.358.913-.655 2.151-.295 2.549.679.608.069 1.116.464 1.334 1 .598.068 1.111.451 1.335.998.738.082 1.36.653 1.449 1.434l.002.225.45.402c.252.291.68.324.96.106.286-.223.324-.624.075-.909l-1.457-1.279c-.157-.139.052-.38.213-.241l1.491 1.308c.257.294.692.332.969.114.285-.22.316-.631.068-.916l-1.896-1.628c-.162-.135.048-.38.208-.242l1.944 1.669c.248.282.678.335.967.114.283-.22.349-.606-.002-.995-1.24-1.112-2.671-2.405-4.143-3.796-.355.488-2.176 1.502-3.279 1.502s-1.779-.675-1.96-1.343c-.157-.582.051-1.139.531-1.419.535-.313 1.055-.762 1.562-1.269-.789-.586-1.203-.398-2.067.013-.503.238-1.1.521-1.854.647l.438-1.67c1.327-.488 2.549-1.608 4.505-.083l.491-.552c.395-.447.911-.715 1.503-.715.436 0 .91.161 1.408.417 1.518.793 2.293 1.256 3.443 1.294l.394 1.508h-.008c-1.797.033-2.676-.508-4.516-1.47-.513-.263-.859-.318-1.1-.044-.984 1.12-2.031 2.309-3.192 3.063.573.458 2.019-.458 2.592-.92.25-.201.638-.468 1.128-.468.553 0 .955.331 1.244.619.68.68 2.57 2.389 3.407 3.142.434-.242.868-.435 1.311-.605l.383 1.467c-.319.134-.633.286-.95.461zm-11.037.875l.609-.747c.25-.3.215-.722-.08-.944-.296-.223-.737-.158-.986.14l-.61.749c-.251.298-.214.721.08.942s.737.159.987-.14zm1.328 1.006l.617-.755c.248-.297.213-.722-.082-.943-.294-.221-.734-.159-.984.142l-.616.754c-.251.3-.21.712.086.936.297.222.729.167.979-.134zm1.343.992l.608-.747c.251-.299.215-.721-.08-.944-.296-.222-.735-.157-.986.142l-.609.745c-.251.3-.213.724.082.945.293.221.734.16.985-.141zm1.865-.691c-.294-.224-.735-.159-.987.139l-.612.751c-.249.299-.213.722.082.943.295.221.735.16.986-.142l.61-.75c.253-.297.217-.72-.079-.941zm1.427 1.134l-.24-.212c-.063.239-.173.464-.332.65l-.358.441c.133.106.288.176.448.176.149 0 .295-.046.415-.138.284-.223.317-.632.067-.917zm5.201-10.889l1.974 7.562 3.484-.891-1.932-7.562-3.526.891zm-7.959-6.891l-.986.174.521 2.954.984-.174-.519-2.954zm3.82.174l-.985-.174-.521 2.954.985.174.521-2.954zm3.597 1.228l-.867-.5-1.5 2.598.867.5 1.5-2.598zm-11.133-.5l-.867.5 1.5 2.598.867-.5-1.5-2.598z" />
                                </svg>
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="handshake" name="enlevement" value="handshake" v-model="enlevement" />
                        </div>
                        <div class="field-radiobutton">
                            <label class="form-check-label" for="maison">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" /></svg>
                            </label>
                            <RadioButton v-on:change="toggleForm2" id="maison" name="enlevement" value="maison" v-model="enlevement" />
                        </div>
                    </div>

                </div>
            </div>

            
            <transition name="popup" mode="out-in">
                <div v-if="secondForm" class="card">
                    <h1 style="font-size:2rem;">Votre bagage</h1>

                    <div class="formPart formgrid grid">
                        <div class="formPartRow field col-12 md:col-12">
                            <label for="datepicker">Nombre de bagage</label>
                            <Dropdown v-on:change="updateBagageValue($event)" v-model="selectedBagage" :options="bagageNumbers" optionLabel="name" placeholder="Choisir le nombre de bagage" />
                        </div>

                        <div v-for="n in bagages" :key="n.id">
                            <div class="formPartRow field col-12 md:col-12" style="display:flex;">
                                <div class="field col-12 md:col-1">
                                    <span style="width:70px; margin-right:20px; text-decoration:underline; text-decoration-thickness: 2 px; text-decoration-color:#fb6e4a">
                                    Bagage {{ n.id }}
                                    </span>
                                </div>
                                <div class="field col-12 md:col-3">
                                    <label for="poids">Poids Maximum</label>
                                    <InputNumber id="poids" v-model="n.weightValue" :min="0" :max="1000" suffix=" kg" />
                                </div>  

                                <div class="field col-12 md:col-6">
                                    <legend class="mb-2" style="border-bottom:none;">Dimensions Maximum
                                    </legend>
                                    <label style="margin-right:5px;" for="dimL">L</label>
                                    <InputNumber class="p-invalid" inputStyle="width:130px;" style="width:130px; margin-right:20px;" id="dimL" v-model="n.dimLValue"
                                    :minFractionDigits="2" :maxFractionDigits="5" :min="0" :max="1000" suffix=" cm" />

                                    <label style="margin-right:5px;" for="diml">l</label>
                                    <InputNumber inputStyle="width:130px;" style="width:130px; margin-right:20px;" id="diml" v-model="n.dimlValue" 
                                    :minFractionDigits="2" :maxFractionDigits="5" :min="0" :max="1000" suffix=" cm" />

                                    <label style="margin-right:5px;" for="dimH">H</label>
                                    <InputNumber inputStyle="width:130px;" style="width:130px; margin-right:20px;" id="dimH" v-model="n.dimHValue"
                                    :minFractionDigits="2" :maxFractionDigits="5" :min="0" :max="1000" suffix=" cm" />

                                </div>

                                <div class="field col-12 md:col-1 flex flex-column align-items-center">
                                    <label class="mb-2" for="colorP">Couleur</label>
                                    <ColorPicker id="colorP" v-model="n.color" />
                                </div>
                            </div>
                        </div>

                        <div v-if="selectedBagage" class="formPartRow field col-12 md:col-12 flex text-center">
                            <div class="field col-12 md:col-2">
                                <p class="font-bold underline">Contenu privilégié:</p>
                            </div>

                            <div class="field col-12 md:col-8 flex justify-content-center">
                                <div class="field-checkbox mb-0 mr-3">
                                    <Checkbox id="particularitePro" name="particularite" value="particularitePro" v-model="particularite" />
                                    <label for="particularitePro">Matériel professionnel</label>
                                </div>

                                <div class="field-checkbox mb-0 mr-3">
                                    <Checkbox id="particulariteFra" name="particularite" value="particulariteFra" v-model="particularite" />
                                    <label for="particulariteFra">Contenu fragile</label>
                                </div>

                                <div class="field-checkbox mb-0 mr-3">
                                    <Checkbox id="particularitePerso" name="particularite" value="particularitePerso" v-model="particularite" />
                                    <label for="particularitePerso">Affaire personnel</label>
                                </div>
                            </div>


                        </div>

                        <div v-for="n in bagages" :key="n.id" class="formPartRow field col-12 md:col-12 flex text-center">
                            <div class="field col-12 md:col-2">
                                Photo bagage {{ n.id }}
                            </div>

                            <div class="field col-12 md:col-6">
                                <FileUpload @change="toggleForm3" name="files[]" url="./upload.php" :multiple="true" cancelLabel="Annuler" chooseLabel="Parcourir"
                                accept="image/jpeg,image/gif,image/png,application/pdf" :maxFileSize="1000000">
                                    <template #empty>
                                        <p>Drag and drop.</p>
                                    </template>
                                </FileUpload>
                            </div>

                        </div>
                        
                        <div v-if="selectedBagage" class="formPartRow field col-12 md:col-12">
                            <h5 class="text-2xl mb-2">Commentaire</h5>
                            <Textarea @click="toggleForm3" v-model="commentaire" rows="5" cols="100" />
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="popup" mode="out-in">
                <div v-if="thirdForm" class="card">
                    <h1 style="font-size:2rem;">Votre tarif</h1>

                    <div class="formPart formgrid grid">
                        <div style="justify-content: start;" class="formPartRow field col-12 md:col-12">
                            <p class="m-0 ml-2 text-xl">Option Assurance: 3 €</p>
                        </div>
                        <div style="justify-content: start;" class="formPartRow field col-12 md:col-12">
                            <p class="m-0 ml-2 text-xl">Option garantie en plus: 1 €</p>
                        </div>
                        <div style="justify-content: start;" class="formPartRow field col-12 md:col-12">
                            <span class="m-0 ml-2 text-xl text-gray-600">Tarif conseillé: 15 €</span>
                        </div>
                        <div class="formPartRow field col-12 md:col-12 m-0 ml-2 flex justify-content-start">
                            <label class="text-xl mr-2" for="estimation">Quel tarif souhaitez-vous afficher ? </label>
                            <InputNumber style=" margin-right:20px;" id="estimation" v-model="estimatedValue"
                            :minFractionDigits="2" :maxFractionDigits="3" :min="0" :max="500" suffix=" €" />
                        </div>

                    </div>

                </div>
            </transition>

            <div style="margin-top: 20px; display:flex; justify-content:center;" v-if="thirdForm">
                <a href="#app">
                    <Button @click="success = true" label="Poster mon annonce" class="postButton p-button-outlined" />
                </a>
            </div>

        </form>

    </section>



</template>





<script>

import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Checkbox from 'primevue/checkbox'
import FileUpload from 'primevue/fileupload'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import ColorPicker from 'primevue/colorpicker'
import Message from 'primevue/message';

export default {
    setup() {
        const home = ref({
            icon: 'pi pi-home', 
            to: '/',
        });
        const items = ref([
            {label: 'Proposer un bagage'}
        ]);
        const particularite = ref([]);

        return { home, items, particularite }
    },
    components:{Breadcrumb, Calendar, RadioButton, Dropdown, InputNumber, Checkbox, FileUpload, Textarea, Button, ColorPicker, Message },
    data(){
        return{
            value: null,
            timeD: null,
            timeA: null,
            locomotion: null,
            enlevement: null,

            secondForm: false,
            selectedBagage: 0,
            weightValue: 0,
            diml: 0,
            dimL: 0,
            dimH: 0,
            commentaire: null,
            bagageNumbers: [
                {name: 1},
                {name: 2},
                {name: 3},
                {name: 4},
                {name: 5},
                {name: 6},
                {name: 7},
                {name: 8},
                {name: 9},
                {name: 10},
                
            ],
            bagages: [],
            files: [],

            thirdForm : false,
            estimatedValue: null,
            success: false,
        }
    },
    methods: {
        toggleForm2: function()
        {   
            if( this.timeD != null && this.timeA != null && this.value != null && this.locomotion != null && this.enlevement != null )
            {
               this.secondForm = true
            }

        },
        updateBagageValue: function(itemIndex)
        {

            if(this.selectedBagage.name == null)
            {
                this.selectedBagage.name = 0;
            }
            if(this.selectedBagage.name > this.bagages.length)
            {
                for(let i=this.bagages.length+1; i<= this.selectedBagage.name; i++)
                {
                    this.bagages.push({
                        id: i,
                        color: null,
                        colorbind:"",
                        weightValue: 0,
                        dimLValue: 0,
                        dimlValue: 0,
                        dimHValue: 0,
                        files: []
                    })
                }
            }

            else if(this.selectedBagage.name < this.bagages.length)
            {
                for(let i = this.bagages.length; i > this.selectedBagage.name; i--)
                {
                    this.bagages.splice(this.bagages,1);
                }
            }
            
        },
        myUploader(event) 
        {
            //event.files == files to upload
        },


        toggleForm3()
        {
            this.thirdForm = true
        },

        setBg({ previewSrc }) 
        {
        return previewSrc ? { backgroundImage: `url(${previewSrc})` } : {};
        }
    }
}

</script>





<style scoped>

/* .preview-list {
  display: flex;
  flex-wrap: wrap;
  padding: 1em 0 0 1em;
  position: relative;
}

.preview-list.item{
    width: 12.5%;
    padding-right: 1em;
    margin-bottom: 1em;
    list-style: none;
    transition: all 1s;
}

.preview-list.item.inner{
    width: 100%;
}
.preview-list.item.preview{
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #ddd;
    border-radius: 3px;
}
.preview-list.item.name{
    display: block;   
    width: 100%;
    line-height: 1.8em;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.list-leave-active {
  position: absolute;
} */

.colorP{
    width: 150px;
}
.page-porter-container{
    padding-top: 60px;
    display: grid;
    justify-content: center;
    width: 100%;
}
.breadcrumb-aligner{
    width: 1098px;
    
}
.formPart{
    border: 0.5rem solid var(--Tertiary-Color);
    border-radius: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 1098px;
}
.formPartRow{
    display: grid;
    justify-content: center;
    align-items: center;
}

.p-button.p-component.p-button-icon-only.p-datepicker-trigger{
    background-color: green !important;
}
.locomotion{
    display: flex;
}
.field-radiobutton{
    display: flex;
    flex-direction: column;
    margin-right: 5px;
}
.field-radiobutton label{
    margin-left: 0px;
}

.popup-enter-active,
.popup-leave-active {
    transition: all 1s;
}

.popup-enter-from,
.popup-leave-to {
opacity: 0;
transform: translateY(30px);
}
.postButton{
    height:70px;
    font-size:1.2rem;
    color: var(--Tertiary-Color);
}

</style>