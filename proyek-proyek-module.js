(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proyek-proyek-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/proyek/add/add.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/development/proyek/add/add.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Project</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project name</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Project name\" formControlName=\"nama_projek\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project owner</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Project Owner\" formControlName=\"owner\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <div nz-row nzGutter=\"8\">\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-label>Start date</nz-form-label>\r\n                                            <nz-form-control>\r\n                                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                                    formControlName=\"tanggal_mulai_projek\"></nz-date-picker>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-label>Until</nz-form-label>\r\n                                            <nz-form-control>\r\n                                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Until\"\r\n                                                    style=\"margin-left: 10px\" formControlName=\"tanggal_selesai_projek\">\r\n                                                </nz-date-picker>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Value</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzCompact>\r\n                                            <nz-select formControlName=\"currency\" placeholder=\"currency\"\r\n                                                style=\"width: 20%;\">\r\n                                                <nz-option nzLabel=\"IDR\" nzValue=\"IDR\"></nz-option>\r\n                                                <nz-option nzLabel=\"USD\" nzValue=\"USD\"></nz-option>\r\n                                            </nz-select>\r\n                                            <input nz-input type=\"number\" placeholder=\"value\" style=\"width: 80%;\"\r\n                                                formControlName=\"nilai_projek\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Value type</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                            formControlName=\"nilai_tipe\">\r\n                                            <nz-option nzLabel=\"fixed\" nzValue=\"fixed\"></nz-option>\r\n                                            <nz-option nzLabel=\"Hourly\" nzValue=\"Hourly\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Priority</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select priority\"\r\n                                            formControlName=\"prioritas\">\r\n                                            <nz-option nzLabel=\"Hight\" nzValue=\"Hight\"></nz-option>\r\n                                            <nz-option nzLabel=\"Medium\" nzValue=\"Medium\"></nz-option>\r\n                                            <nz-option nzLabel=\"Low\" nzValue=\"Low\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Contract ID</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Contract id\" formControlName=\"nomor_kontrak\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project leader</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Proyek Leader\"\r\n                                            formControlName=\"id_pegawai_leader\">\r\n                                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                                nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                            </nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Contract date</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select date\"\r\n                                            formControlName=\"tanggal_kontrak\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Description</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Project description\"\r\n                                        formControlName=\"keterangan_projek\"\r\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h6 class=\"mb=0\">Project member</h6>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"20\">\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\" name=\"arifann\"\r\n                                    style=\"width:100%\" [(ngModel)]=\"id_projek_anggota\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"4\">\r\n                                <button nz-button nzType=\"primary\" (click)=\"tambahAnggota()\">Add Member</button>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <br />\r\n                        <nz-table #basicTable1 [nzData]=\"listAnggota\" [nzShowPagination]=\"true\"\r\n                            class=\"air__utils__scrollTable mb-4\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Member</th>\r\n                                    <th>ID</th>\r\n                                    <th>Departement</th>\r\n                                    <th>Division</th>\r\n                                    <th>\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of basicTable1.data\">\r\n                                    <td>{{data.nama_depan}} {{data.nama_belakang}}</td>\r\n                                    <td>{{data.no_induk}}</td>\r\n                                    <td>{{data.nama_departemen}}</td>\r\n                                    <td>{{data.nama_divisi}}</td>\r\n                                    <td>\r\n                                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                        </a>\r\n                                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                            <ul nz-menu nzSelectable>\r\n                                                <li nz-menu-item>\r\n                                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                        nzPopconfirmPlacement=\"bottom\"\r\n                                                        (nzOnConfirm)=\"deleteAnggota(data.id_projek_anggota)\">Delete</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </nz-dropdown-menu>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </nz-table>\r\n                    </div>\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                            form=\"ngForm\"><span>Submit</span></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/proyek/detail/detail.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/development/proyek/detail/detail.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Project</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataProjek.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            {{dataProjek.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\">\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Project name</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.nama_projek}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Owner</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.owner}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Start date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">:\r\n                                            {{dataProjek.tanggal_mulai_projek | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Until date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">:\r\n                                            {{dataProjek.tanggal_selesai_projek | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Project value</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.currency}}{{dataProjek.nilai_projek | currency:'. '}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">File</td>\r\n                                        <td class=\"pr-0 text-right text-dark\">\r\n                                            <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"dataProjek.id_dokumen\">\r\n                                            </erp-download-mode1>\r\n                                        </td>\r\n                                    </tr>\r\n                                </div>\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Value Type</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.nilai_tipe}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Priority</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.prioritas}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Contract ID</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.nomor_kontrak}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Contract date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.tanggal_kontrak | date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Projek leader</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                            {{dataPegawai.nama_belakang}}</td>\r\n                                    </tr>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                    <tr>\r\n                        <h6 class=\"mb=0\">Project Description</h6>\r\n                    </tr>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <tr class=\"text-gray-6 pl-0\">{{dataProjek.keterangan_projek}}</tr>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <nz-table #basicTable [nzData]=\"dataProjekAnggota\" [nzShowPagination]=\"true\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"bg-transparent text-sentencase\">Member</th>\r\n                                <th class=\"bg-transparent text-sentencase\">ID</th>\r\n                                <th class=\"bg-transparent text-sentencase \">Positions</th>\r\n                                <th class=\"bg-transparent text-sentencase \">Division</th>\r\n                                <th class=\"bg-transparent text-sentencase \">Departement</th>\r\n                                <th class=\"bg-transparent text-sentencase \">Office</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable.data\">\r\n                                <td>{{data.nama_depan}}{{data.nama_belakang}}</td>\r\n                                <td>{{data.no_induk}}</td>\r\n                                <td>{{data.nama_jabatan}}</td>\r\n                                <td>{{data.nama_divisi}}</td>\r\n                                <td>{{data.nama_departemen}}</td>\r\n                                <td>{{data.nama_kantor}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\" style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h6>Status\r\n                        <nz-tag style=\"float: right;\" [nzColor]=\"dataProjek.status | status\">\r\n                            {{ dataProjek.status | titlecase }}\r\n                        </nz-tag>\r\n                    </h6><br>\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h6>Activities</h6><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/proyek/edit/edit.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/development/proyek/edit/edit.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Project</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project name</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Project name\" formControlName=\"nama_projek\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project owner</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Project Owner\" formControlName=\"owner\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <div nz-row nzGutter=\"8\">\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-label>Start date</nz-form-label>\r\n                                            <nz-form-control>\r\n                                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                                    formControlName=\"tanggal_mulai_projek\"></nz-date-picker>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-label>Until</nz-form-label>\r\n                                            <nz-form-control>\r\n                                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Until\"\r\n                                                    style=\"margin-left: 10px\" formControlName=\"tanggal_selesai_projek\">\r\n                                                </nz-date-picker>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Value</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzCompact>\r\n                                            <nz-select formControlName=\"currency\" placeholder=\"currency\"\r\n                                                style=\"width: 20%;\">\r\n                                                <nz-option nzLabel=\"IDR\" nzValue=\"IDR\"></nz-option>\r\n                                                <nz-option nzLabel=\"USD\" nzValue=\"USD\"></nz-option>\r\n                                            </nz-select>\r\n                                            <input nz-input type=\"number\" placeholder=\"value\" style=\"width: 80%;\"\r\n                                                formControlName=\"nilai_projek\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Value type</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                            formControlName=\"nilai_tipe\">\r\n                                            <nz-option nzLabel=\"fixed\" nzValue=\"fixed\"></nz-option>\r\n                                            <nz-option nzLabel=\"Hourly\" nzValue=\"Hourly\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Priority</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select priority\"\r\n                                            formControlName=\"prioritas\">\r\n                                            <nz-option nzLabel=\"Hight\" nzValue=\"Hight\"></nz-option>\r\n                                            <nz-option nzLabel=\"Medium\" nzValue=\"Medium\"></nz-option>\r\n                                            <nz-option nzLabel=\"Low\" nzValue=\"Low\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Contract ID</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Contract id\" formControlName=\"nomor_kontrak\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project leader</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Proyek Leader\"\r\n                                            formControlName=\"id_pegawai_leader\">\r\n                                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                                nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                            </nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Contract date</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select date\"\r\n                                            formControlName=\"tanggal_kontrak\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Upload Files</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <a nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\"><i\r\n                                                nz-icon nzType=\"cloud-upload\"\r\n                                                nzTheme=\"outline\"></i>&nbsp;Upload</a>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Description</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Project description\"\r\n                                        formControlName=\"keterangan_projek\"\r\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h6 class=\"mb=0\">Project member</h6>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"20\">\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\" name=\"arifann\"\r\n                                    style=\"width:100%\" [(ngModel)]=\"id_projek_anggota\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"4\">\r\n                                <button nz-button nzType=\"primary\" (click)=\"tambahAnggota()\">Add Member</button>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <br />\r\n                        <nz-table #basicTable1 [nzData]=\"listAnggota\" [nzShowPagination]=\"true\"\r\n                            class=\"air__utils__scrollTable mb-4\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Member</th>\r\n                                    <th>ID</th>\r\n                                    <th>Departement</th>\r\n                                    <th>Division</th>\r\n                                    <th>\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of basicTable1.data\">\r\n                                    <td>{{data.nama_depan}} {{data.nama_belakang}}</td>\r\n                                    <td>{{data.no_induk}}</td>\r\n                                    <td>{{data.nama_departemen}}</td>\r\n                                    <td>{{data.nama_divisi}}</td>\r\n                                    <td>\r\n                                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                        </a>\r\n                                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                            <ul nz-menu nzSelectable>\r\n                                                <li nz-menu-item>\r\n                                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                        nzPopconfirmPlacement=\"bottom\"\r\n                                                        (nzOnConfirm)=\"deleteAnggota(data.id_projek_anggota)\">Delete</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </nz-dropdown-menu>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </nz-table>\r\n                            <div class=\"footer\">\r\n                                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                                <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                                    form=\"ngForm\"><span>Submit</span></button>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\" *ngIf=\"toogleUpload\">\r\n                <div class=\"card-body\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <erp-single-upload></erp-single-upload>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/proyek/list/list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/development/proyek/list/list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Project</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                        [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                        (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                        <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                            <tr>\r\n                                <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                                <th nzShowSort nzSortKey=\"nomor_kontrak\">Contract Id</th>\r\n                                <th nzShowSort nzSortKey=\"nama_projek\">Name</th>\r\n                                <th nzShowSort nzSortKey=\"owner\">Owner</th>\r\n                                <th nzShowSort nzSortKey=\"nilai_projek\">Value</th>\r\n                                <th nzShowSort nzSortKey=\"prioritas\">Priority</th>\r\n                                <th nzShowSort nzSortKey=\"tanggal_kontrak\">Contract date</th>\r\n                                <th>File</th>\r\n                                <th class=\"text-right\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of ajaxTable.data\">\r\n                                <td>\r\n                                    <nz-tag [nzColor]=\"data.status | status\">{{data.status |titlecase}}</nz-tag>\r\n                                </td>\r\n                                <td>{{ data.nomor_kontrak }}</td>\r\n                                <td>{{ data.nama_projek }}</td>\r\n                                <td>{{ data.owner }}</td>\r\n                                <td>{{data.currency}}{{ data.nilai_projek | currency: '.' }}</td>\r\n                                <td>{{ data.prioritas }}</td>\r\n                                <td>{{ data.tanggal_kontrak |date }}</td>\r\n                                <td>\r\n                                    <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                        <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n                                            <li nz-menu-item\r\n                                                [routerLink]=\"['../edit',data.id_projek]\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                            </li>\r\n                                            <li nz-menu-item\r\n                                                [routerLink]=\"['../detail',data.id_projek]\"><i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                            </li>\r\n                                            <li nz-menu-divider></li>\r\n                                            <li nz-menu-item >\r\n                                                <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                    nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_projek)\"\r\n                                                    (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/proyek/add/add.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/general/proyek/add/add.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">New Project</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project name</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Project name\" formControlName=\"nama_projek\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project owner</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Project Owner\" formControlName=\"owner\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <div nz-row nzGutter=\"8\">\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-label>Start date</nz-form-label>\r\n                                            <nz-form-control>\r\n                                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                                    formControlName=\"tanggal_mulai_projek\"></nz-date-picker>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-label>Until</nz-form-label>\r\n                                            <nz-form-control>\r\n                                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Until\"\r\n                                                    style=\"margin-left: 10px\" formControlName=\"tanggal_selesai_projek\">\r\n                                                </nz-date-picker>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Value</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzCompact>\r\n                                            <nz-select formControlName=\"currency\" placeholder=\"currency\"\r\n                                                style=\"width: 20%;\">\r\n                                                <nz-option nzLabel=\"IDR\" nzValue=\"IDR\"></nz-option>\r\n                                                <nz-option nzLabel=\"USD\" nzValue=\"USD\"></nz-option>\r\n                                            </nz-select>\r\n                                            <input nz-input type=\"number\" placeholder=\"value\" style=\"width: 80%;\"\r\n                                                formControlName=\"nilai_projek\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Value type</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                            formControlName=\"nilai_tipe\">\r\n                                            <nz-option nzLabel=\"fixed\" nzValue=\"fixed\"></nz-option>\r\n                                            <nz-option nzLabel=\"Hourly\" nzValue=\"Hourly\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Priority</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select priority\"\r\n                                            formControlName=\"prioritas\">\r\n                                            <nz-option nzLabel=\"Hight\" nzValue=\"Hight\"></nz-option>\r\n                                            <nz-option nzLabel=\"Medium\" nzValue=\"Medium\"></nz-option>\r\n                                            <nz-option nzLabel=\"Low\" nzValue=\"Low\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Contract ID</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Contract id\" formControlName=\"nomor_kontrak\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project leader</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Proyek Leader\"\r\n                                            formControlName=\"id_pegawai_leader\">\r\n                                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                                nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                            </nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Contract date</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select date\"\r\n                                            formControlName=\"tanggal_kontrak\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Description</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Project description\"\r\n                                        formControlName=\"keterangan_projek\"\r\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h6 class=\"mb=0\">Project member</h6>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"20\">\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\" name=\"arifann\"\r\n                                    style=\"width:100%\" [(ngModel)]=\"id_projek_anggota\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"4\">\r\n                                <button nz-button nzType=\"primary\" (click)=\"tambahAnggota()\">Add Member</button>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <br />\r\n                        <nz-table #basicTable1 [nzData]=\"listAnggota\" [nzShowPagination]=\"true\"\r\n                            class=\"air__utils__scrollTable mb-4\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Member</th>\r\n                                    <th>ID</th>\r\n                                    <th>Departement</th>\r\n                                    <th>Division</th>\r\n                                    <th>\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of basicTable1.data\">\r\n                                    <td>{{data.nama_depan}} {{data.nama_belakang}}</td>\r\n                                    <td>{{data.no_induk}}</td>\r\n                                    <td>{{data.nama_departemen}}</td>\r\n                                    <td>{{data.nama_divisi}}</td>\r\n                                    <td>\r\n                                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                        </a>\r\n                                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                            <ul nz-menu nzSelectable>\r\n                                                <li nz-menu-item>\r\n                                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                        nzPopconfirmPlacement=\"bottom\"\r\n                                                        (nzOnConfirm)=\"deleteAnggota(data.id_projek_anggota)\">Delete</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </nz-dropdown-menu>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </nz-table>\r\n                    </div>\r\n                    <div class=\"footer\">\r\n                        <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                            style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                        <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                            form=\"ngForm\"><span>Submit</span></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/proyek/detail/detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/general/proyek/detail/detail.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Detail Project</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <span style=\"margin-right: 15px;\">\r\n                {{dataProjek.nomor | titlecase}}\r\n            </span>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <button nz-button nzType=\"primary\" style=\"margin-right: 15px;\"><i nz-icon\r\n                    nzType=\"printer\"></i>Print</button>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            {{dataProjek.status | titlecase}}\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-borderless\">\r\n                        <tbody>\r\n                            <div nz-row nzGutter=\"8\">\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Project name</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.nama_projek}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Owner</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.owner}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Start date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">:\r\n                                            {{dataProjek.tanggal_mulai_projek | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Until date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">:\r\n                                            {{dataProjek.tanggal_selesai_projek | date}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Project value</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.currency}}{{dataProjek.nilai_projek | currency:'. '}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">File</td>\r\n                                        <td class=\"pr-0 text-right text-dark\">\r\n                                            <erp-download-mode1 [type]=\"'full'\" [formoduleid]=\"dataProjek.id_dokumen\">\r\n                                            </erp-download-mode1>\r\n                                        </td>\r\n                                    </tr>\r\n                                </div>\r\n                                <div nz-col nzSpan=\"12\">\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Value Type</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.nilai_tipe}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Priority</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.prioritas}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Contract ID</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.nomor_kontrak}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Contract date</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataProjek.tanggal_kontrak | date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-gray-6 pl-0\">Projek leader</td>\r\n                                        <td class=\"pr-0 text-left text-dark\">: {{dataPegawai.nama_depan}}\r\n                                            {{dataPegawai.nama_belakang}}</td>\r\n                                    </tr>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n                    <tr>\r\n                        <h6 class=\"mb=0\">Project Description</h6>\r\n                    </tr>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <tr class=\"text-gray-6 pl-0\">{{dataProjek.keterangan_projek}}</tr>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <nz-table #basicTable [nzData]=\"dataProjekAnggota\" [nzShowPagination]=\"true\"\r\n                        class=\"air__utils__scrollTable mb-4\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"bg-transparent text-sentencase\">Member</th>\r\n                                <th class=\"bg-transparent text-sentencase\">ID</th>\r\n                                <th class=\"bg-transparent text-sentencase \">Positions</th>\r\n                                <th class=\"bg-transparent text-sentencase \">Division</th>\r\n                                <th class=\"bg-transparent text-sentencase \">Departement</th>\r\n                                <th class=\"bg-transparent text-sentencase \">Office</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of basicTable.data\">\r\n                                <td>{{data.nama_depan}}{{data.nama_belakang}}</td>\r\n                                <td>{{data.no_induk}}</td>\r\n                                <td>{{data.nama_jabatan}}</td>\r\n                                <td>{{data.nama_divisi}}</td>\r\n                                <td>{{data.nama_departemen}}</td>\r\n                                <td>{{data.nama_kantor}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n                    <div class=\"footer\">\r\n                        <div class=\"row\">\r\n                            <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                                <button nz-button nzType=\"default\" (click)=\"goToBack()\" style=\"margin-right: 8px;\">Back</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h6>Status\r\n                        <nz-tag style=\"float: right;\" [nzColor]=\"dataProjek.status | status\">\r\n                            {{ dataProjek.status | titlecase }}\r\n                        </nz-tag>\r\n                    </h6><br>\r\n                    <erp-approval-standar></erp-approval-standar>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h6>Activities</h6><br><br>\r\n                    <nz-timeline nzMode=\"left\">\r\n                        <nz-timeline-item *ngFor=\"let item of listLog\">{{item.status}} oleh {{item.nama_depan}}\r\n                            <b>{{item.sebagai}}</b> {{item.created_at | date:'mediumDate' }} </nz-timeline-item>\r\n                    </nz-timeline>\r\n                    <ng-template #dotTemplate>\r\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/proyek/edit/edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/general/proyek/edit/edit.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Edit Project</h5>\r\n        </div>\r\n    </div>\r\n    <div nz-row nzGutter=\"8\">\r\n        <div nz-col nzSpan=\"16\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <form nz-form [formGroup]=\"dataForm\" (ngSubmit)=\"simpan()\" id=\"ngForm\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project name</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Project name\" formControlName=\"nama_projek\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project owner</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Project Owner\" formControlName=\"owner\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <div nz-row nzGutter=\"8\">\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-label>Start date</nz-form-label>\r\n                                            <nz-form-control>\r\n                                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"From\"\r\n                                                    formControlName=\"tanggal_mulai_projek\"></nz-date-picker>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                    <div nz-col nzSpan=\"12\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-label>Until</nz-form-label>\r\n                                            <nz-form-control>\r\n                                                <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Until\"\r\n                                                    style=\"margin-left: 10px\" formControlName=\"tanggal_selesai_projek\">\r\n                                                </nz-date-picker>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Value</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-input-group nzCompact>\r\n                                            <nz-select formControlName=\"currency\" placeholder=\"currency\"\r\n                                                style=\"width: 20%;\">\r\n                                                <nz-option nzLabel=\"IDR\" nzValue=\"IDR\"></nz-option>\r\n                                                <nz-option nzLabel=\"USD\" nzValue=\"USD\"></nz-option>\r\n                                            </nz-select>\r\n                                            <input nz-input type=\"number\" placeholder=\"value\" style=\"width: 80%;\"\r\n                                                formControlName=\"nilai_projek\" />\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Value type</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a type\"\r\n                                            formControlName=\"nilai_tipe\">\r\n                                            <nz-option nzLabel=\"fixed\" nzValue=\"fixed\"></nz-option>\r\n                                            <nz-option nzLabel=\"Hourly\" nzValue=\"Hourly\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Priority</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select priority\"\r\n                                            formControlName=\"prioritas\">\r\n                                            <nz-option nzLabel=\"Hight\" nzValue=\"Hight\"></nz-option>\r\n                                            <nz-option nzLabel=\"Medium\" nzValue=\"Medium\"></nz-option>\r\n                                            <nz-option nzLabel=\"Low\" nzValue=\"Low\"></nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Contract ID</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <input nz-input placeholder=\"Contract id\" formControlName=\"nomor_kontrak\" />\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Project leader</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Proyek Leader\"\r\n                                            formControlName=\"id_pegawai_leader\">\r\n                                            <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                                nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                            </nz-option>\r\n                                        </nz-select>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Contract date</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <nz-date-picker nzFormat=\"yyyy-MM-dd\" nzPlaceHolder=\"Select date\"\r\n                                            formControlName=\"tanggal_kontrak\"></nz-date-picker>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"12\">\r\n                                <nz-form-item>\r\n                                    <nz-form-label>Upload Files</nz-form-label>\r\n                                    <nz-form-control>\r\n                                        <a nz-button nzType=\"primary\" nzBlock (click)=\"togleShowUpload()\"><i\r\n                                                nz-icon nzType=\"cloud-upload\"\r\n                                                nzTheme=\"outline\"></i>&nbsp;Upload</a>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <nz-form-item>\r\n                                <nz-form-label>Description</nz-form-label>\r\n                                <nz-form-control>\r\n                                    <textarea nz-input placeholder=\"Project description\"\r\n                                        formControlName=\"keterangan_projek\"\r\n                                        [nzAutosize]=\"{ minRows: 4, maxRows: 4 }\"></textarea>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-header card-header-flex\">\r\n                        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n                            <h6 class=\"mb=0\">Project member</h6>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div nz-row nzGutter=\"8\">\r\n                            <div nz-col nzSpan=\"20\">\r\n                                <nz-select nzShowSearch nzAllowClear nzPlaceHolder=\"Select a person\" name=\"arifann\"\r\n                                    style=\"width:100%\" [(ngModel)]=\"id_projek_anggota\">\r\n                                    <nz-option *ngFor=\"let item of listPegawai\" nzValue=\"{{item.id_pegawai}}\"\r\n                                        nzLabel=\"{{item.no_induk}} | {{item.nama_depan}} {{item.nama_belakang}}\">\r\n                                    </nz-option>\r\n                                </nz-select>\r\n                            </div>\r\n                            <div nz-col nzSpan=\"4\">\r\n                                <button nz-button nzType=\"primary\" (click)=\"tambahAnggota()\">Add Member</button>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <br />\r\n                        <nz-table #basicTable1 [nzData]=\"listAnggota\" [nzShowPagination]=\"true\"\r\n                            class=\"air__utils__scrollTable mb-4\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Member</th>\r\n                                    <th>ID</th>\r\n                                    <th>Departement</th>\r\n                                    <th>Division</th>\r\n                                    <th>\r\n                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of basicTable1.data\">\r\n                                    <td>{{data.nama_depan}} {{data.nama_belakang}}</td>\r\n                                    <td>{{data.no_induk}}</td>\r\n                                    <td>{{data.nama_departemen}}</td>\r\n                                    <td>{{data.nama_divisi}}</td>\r\n                                    <td>\r\n                                        <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                            <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                        </a>\r\n                                        <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                            <ul nz-menu nzSelectable>\r\n                                                <li nz-menu-item>\r\n                                                    <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                        nzPopconfirmPlacement=\"bottom\"\r\n                                                        (nzOnConfirm)=\"deleteAnggota(data.id_projek_anggota)\">Delete</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </nz-dropdown-menu>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </nz-table>\r\n                            <div class=\"footer\">\r\n                                <button type=\"button\" (click)=\"goToBack()\" class=\"ant-btn\"\r\n                                    style=\"margin-right: 8px;\"><span>Cancel</span></button>\r\n                                <button type=\"submit\" class=\"ant-btn ant-btn-primary\"\r\n                                    form=\"ngForm\"><span>Submit</span></button>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div nz-col nzSpan=\"8\">\r\n            <div class=\"card\" *ngIf=\"toogleUpload\">\r\n                <div class=\"card-body\">\r\n                    <div nz-row nzGutter=\"8\">\r\n                        <erp-single-upload></erp-single-upload>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/proyek/list/list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hr/direktori/general/proyek/list/list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"air__utils__heading card-header-flex\">\r\n        <div class=\"d-flex flex-column justify-content-center mr-auto\">\r\n            <h5 class=\"mb-0\">Project</h5>\r\n        </div>\r\n        <div class=\"d-flex flex-column justify-content-center\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['../add']\" routerLinkActive=\"router-link-active\">\r\n                Add New\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <nav class=\"navbar\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"search\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <button nz-button nzType=\"primary\" (click)=\"searchData()\">Search</button>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nz-table #ajaxTable nzShowSizeChanger [nzFrontPagination]=\"false\" [nzData]=\"listOfData\"\r\n                        [nzLoading]=\"loading\" [nzTotal]=\"total\" [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\"\r\n                        (nzPageIndexChange)=\"searchData()\" (nzPageSizeChange)=\"searchData(true)\">\r\n                        <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n                            <tr>\r\n                                <th nzShowSort nzSortKey=\"status\">Status</th>\r\n                                <th nzShowSort nzSortKey=\"nomor_kontrak\">Contract Id</th>\r\n                                <th nzShowSort nzSortKey=\"nama_projek\">Name</th>\r\n                                <th nzShowSort nzSortKey=\"owner\">Owner</th>\r\n                                <th nzShowSort nzSortKey=\"nilai_projek\">Value</th>\r\n                                <th nzShowSort nzSortKey=\"prioritas\">Priority</th>\r\n                                <th nzShowSort nzSortKey=\"tanggal_kontrak\">Contract date</th>\r\n                                <th>File</th>\r\n                                <th class=\"text-right\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let data of ajaxTable.data\">\r\n                                <td>\r\n                                    <nz-tag [nzColor]=\"data.status | status\">{{data.status |titlecase}}</nz-tag>\r\n                                </td>\r\n                                <td>{{ data.nomor_kontrak }}</td>\r\n                                <td>{{ data.nama_projek }}</td>\r\n                                <td>{{ data.owner }}</td>\r\n                                <td>{{data.currency}}{{ data.nilai_projek | currency: '.' }}</td>\r\n                                <td>{{ data.prioritas }}</td>\r\n                                <td>{{ data.tanggal_kontrak |date }}</td>\r\n                                <td>\r\n                                    <erp-download-mode1 [formoduleid]=\"data.id_dokumen\"></erp-download-mode1>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                    <a nz-dropdown [nzDropdownMenu]=\"menu\" nzPlacement=\"bottomRight\">\r\n                                        <i nz-icon nzType=\"more\" nzTheme=\"outline\"></i>\r\n                                    </a>\r\n                                    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                                        <ul nz-menu nzSelectable>\r\n                                            <li nz-menu-item\r\n                                                [routerLink]=\"['../edit',data.id_projek]\"><i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>Edit\r\n                                            </li>\r\n                                            <li nz-menu-item\r\n                                                [routerLink]=\"['../detail',data.id_projek]\"><i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>View\r\n                                            </li>\r\n                                            <li nz-menu-divider></li>\r\n                                            <li nz-menu-item >\r\n                                                <a nz-popconfirm nzPopconfirmTitle=\"Are you sure delete this ?\"\r\n                                                    nzPopconfirmPlacement=\"bottom\" (nzOnConfirm)=\"delete(data.id_projek)\"\r\n                                                    (nzOnCancel)=\"batalDelete()\"><i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>Delete</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </nz-dropdown-menu>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </nz-table>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/add/add.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/add/add.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9kZXZlbG9wbWVudC9wcm95ZWsvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/add/add.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/add/add.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");









var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriProjekService, direktoriPegawaiMasterService, direktoriProjekAnggotaService, spinner, notification, fb, pesan, router) {
        this.direktoriProjekService = direktoriProjekService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.direktoriProjekAnggotaService = direktoriProjekAnggotaService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataProjek = {};
        this.dataProjekAnggota = [];
        this.id_projek = '';
        this.listPegawai = [];
        //----------Anggota-----------------
        this.id_projek_anggota = '';
        this.listAnggota = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
        this.beforeCreate();
        //anggota
        this.getListPegawai();
    };
    //-------------------------------------
    AddComponent.prototype.getListPegawai = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
    };
    AddComponent.prototype.tambahAnggota = function () {
        var _this = this;
        if (this.id_projek_anggota == '') {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.direktoriProjekAnggotaService.postDirektoriProjekAnggotas({ id_pegawai: this.id_projek_anggota, id_projek: this.id_projek }).subscribe(function (res) {
            _this.getAnggota();
        });
    };
    AddComponent.prototype.getAnggota = function () {
        var _this = this;
        var filter = {
            id_projek: this.id_projek
        };
        this.direktoriProjekAnggotaService.getDirektoriProjekAnggotas(JSON.stringify(filter)).subscribe(function (res) {
            _this.listAnggota = res.data;
        });
    };
    AddComponent.prototype.deleteAnggota = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekAnggotaService.deleteDirektoriProjekAnggotasId(id).subscribe(function (data) {
            _this.getAnggota();
            _this.spinner.hide();
        });
    };
    //----------Anggota-----------------
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.direktoriProjekService.postDirektoriProjeks(this.dataProjek).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_projek = data.data.id_projek;
            console.log(data.data.id_projek);
            _this.getAnggota();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            keterangan_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_mulai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_selesai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nilai_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nilai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            prioritas: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nomor_kontrak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_kontrak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai_leader: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataProjek = this.dataForm.value;
        this.direktoriProjekService.putDirektoriProjeksIdResponse({ id: this.id_projek, body: this.dataProjek }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/development/proyek/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekAnggotaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/proyek/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/development/proyek/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekAnggotaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/detail/detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/detail/detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9kZXZlbG9wbWVudC9wcm95ZWsvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/detail/detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/detail/detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai.service */ "./src/app/sdk/hr/services/direktori-pegawai.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services_tools_log_flow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/user/services/tools-log-flow.service */ "./src/app/sdk/user/services/tools-log-flow.service.ts");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriProjekService, direktoriProjekAnggotaService, spinner, routerActive, router, direktoriPegawaiService, standarApprovalService, toolsLogFlowService) {
        this.direktoriProjekService = direktoriProjekService;
        this.direktoriProjekAnggotaService = direktoriProjekAnggotaService;
        this.spinner = spinner;
        this.routerActive = routerActive;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.standarApprovalService = standarApprovalService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.id_projek = '';
        this.dataProjek = {};
        this.dataPegawai = {};
        this.dataProjekAnggota = [];
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerActive.paramMap.subscribe(function (params) {
            console.log(params.get('id_projek'));
            if (params.get('id_projek')) {
                _this.id_projek = params.get('id_projek');
            }
            _this.getDetailProjek();
            _this.getProjekAnggota();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailProjek();
                _this.getProjekAnggota();
                _this.getLog();
            }
        });
    };
    //-----projek------
    DetailComponent.prototype.getDetailProjek = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekService.getDirektoriProjeksId(this.id_projek).subscribe(function (data) {
            _this.dataProjek = data.data;
            _this.getPegawai(data.data.id_pegawai_leader);
            _this.params = {
                id: data.data.id_projek,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_projek"
            };
            _this.standarApprovalService.param.next(_this.params);
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai_leader) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai_leader).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    //----projek-anggota------//
    DetailComponent.prototype.getProjekAnggota = function () {
        var _this = this;
        this.direktoriProjekAnggotaService.getDirektoriProjekAnggotas(JSON.stringify({ id_projek: this.id_projek })).subscribe(function (res) {
            _this.dataProjekAnggota = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_projek })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/development/proyek/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriProjekService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriProjekAnggotaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"] },
        { type: src_app_sdk_user_services_tools_log_flow_service__WEBPACK_IMPORTED_MODULE_7__["ToolsLogFlowService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/proyek/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/development/proyek/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriProjekService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriProjekAnggotaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"],
            src_app_sdk_user_services_tools_log_flow_service__WEBPACK_IMPORTED_MODULE_7__["ToolsLogFlowService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/edit/edit.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/edit/edit.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9kZXZlbG9wbWVudC9wcm95ZWsvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/edit/edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/edit/edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriProjekService, direktoriPegawaiMasterService, direktoriProjekAnggotaService, singleUploadService, spinner, notification, pesan, router, routerActive, fb) {
        this.direktoriProjekService = direktoriProjekService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.direktoriProjekAnggotaService = direktoriProjekAnggotaService;
        this.singleUploadService = singleUploadService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.routerActive = routerActive;
        this.fb = fb;
        this.dataProjekAnggota = [];
        this.dataProjek = {};
        this.id_projek = '';
        this.listPegawai = [];
        this.toogleUpload = false;
        this.id_projek_anggota = '';
        this.listAnggota = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_projek = this.routerActive.snapshot.paramMap.get('id_projek');
        this.form();
        this.getData();
        this.getListPegawai();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'hr_project.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.dataForm.patchValue({ id_dokumen: data });
                _this.simpan();
            }
        });
    };
    EditComponent.prototype.togleShowUpload = function () {
        this.toogleUpload = true;
    };
    EditComponent.prototype.getListPegawai = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
    };
    EditComponent.prototype.tambahAnggota = function () {
        var _this = this;
        if (this.id_projek_anggota == '') {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.direktoriProjekAnggotaService.postDirektoriProjekAnggotas({ id_pegawai: this.id_projek_anggota, id_projek: this.id_projek }).subscribe(function (res) {
            _this.getAnggota();
        });
    };
    EditComponent.prototype.getAnggota = function () {
        var _this = this;
        var filter = {
            id_projek: this.id_projek
        };
        this.direktoriProjekAnggotaService.getDirektoriProjekAnggotas(JSON.stringify(filter)).subscribe(function (res) {
            _this.listAnggota = res.data;
        });
    };
    EditComponent.prototype.deleteAnggota = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekAnggotaService.deleteDirektoriProjekAnggotasId(id).subscribe(function (data) {
            _this.getAnggota();
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekService.getDirektoriProjeksId(this.id_projek).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.getAnggota();
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "hr_project",
                for_table: "erp_hr.projek",
                for_module_id: data.data.id_projek
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            keterangan_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_mulai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_selesai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nilai_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nilai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            prioritas: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor_kontrak: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_kontrak: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_leader: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataProjek = this.dataForm.value;
        this.direktoriProjekService.putDirektoriProjeksIdResponse({ id: this.id_projek, body: this.dataProjek }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/development/proyek/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriProjekService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriProjekAnggotaService"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/proyek/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/development/proyek/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriProjekService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriProjekAnggotaService"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/list/list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/list/list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9kZXZlbG9wbWVudC9wcm95ZWsvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/list/list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/list/list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");






var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriProjekService, spinner, pesan, nzMessageService) {
        this.direktoriProjekService = direktoriProjekService;
        this.spinner = spinner;
        this.pesan = pesan;
        this.nzMessageService = nzMessageService;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    ListComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.direktoriProjekService.getDirektoriProjeks(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            console.log(data.data);
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekService.deleteDirektoriProjeksId(id).subscribe(function (data) {
            _this.searchData();
        }, function (err) {
            _this.pesan.pesanWarningForm('Data tidak boleh di delete');
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/development/proyek/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/development/proyek/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/proyek-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/proyek-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ProyekRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyekRoutingModule", function() { return ProyekRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/development/proyek/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/development/proyek/add/add.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/development/proyek/detail/detail.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/development/proyek/list/list.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]
    },
    {
        path: 'edit/:id_projek',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'detail/:id_projek',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]
    }
];
var ProyekRoutingModule = /** @class */ (function () {
    function ProyekRoutingModule() {
    }
    ProyekRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProyekRoutingModule);
    return ProyekRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/development/proyek/proyek.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/development/proyek/proyek.module.ts ***!
  \************************************************************************/
/*! exports provided: ProyekModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyekModule", function() { return ProyekModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _proyek_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proyek-routing.module */ "./src/app/pages/hr/direktori/development/proyek/proyek-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/development/proyek/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/development/proyek/add/add.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/development/proyek/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/development/proyek/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");














var ProyekModule = /** @class */ (function () {
    function ProyekModule() {
    }
    ProyekModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _proyek_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProyekRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__["ApprovalModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_12__["PipeModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_13__["DocumentModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], ProyekModule);
    return ProyekModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/add/add.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/add/add.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9nZW5lcmFsL3Byb3llay9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/add/add.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/add/add.component.ts ***!
  \************************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");









var AddComponent = /** @class */ (function () {
    function AddComponent(direktoriProjekService, direktoriPegawaiMasterService, direktoriProjekAnggotaService, spinner, notification, fb, pesan, router) {
        this.direktoriProjekService = direktoriProjekService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.direktoriProjekAnggotaService = direktoriProjekAnggotaService;
        this.spinner = spinner;
        this.notification = notification;
        this.fb = fb;
        this.pesan = pesan;
        this.router = router;
        this.dataProjek = {};
        this.dataProjekAnggota = [];
        this.id_projek = '';
        this.listPegawai = [];
        //----------Anggota-----------------
        this.id_projek_anggota = '';
        this.listAnggota = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        this.form();
        this.beforeCreate();
        //anggota
        this.getListPegawai();
    };
    //-------------------------------------
    AddComponent.prototype.getListPegawai = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
    };
    AddComponent.prototype.tambahAnggota = function () {
        var _this = this;
        if (this.id_projek_anggota == '') {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.direktoriProjekAnggotaService.postDirektoriProjekAnggotas({ id_pegawai: this.id_projek_anggota, id_projek: this.id_projek }).subscribe(function (res) {
            _this.getAnggota();
        });
    };
    AddComponent.prototype.getAnggota = function () {
        var _this = this;
        var filter = {
            id_projek: this.id_projek
        };
        this.direktoriProjekAnggotaService.getDirektoriProjekAnggotas(JSON.stringify(filter)).subscribe(function (res) {
            _this.listAnggota = res.data;
        });
    };
    AddComponent.prototype.deleteAnggota = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekAnggotaService.deleteDirektoriProjekAnggotasId(id).subscribe(function (data) {
            _this.getAnggota();
            _this.spinner.hide();
        });
    };
    //----------Anggota-----------------
    AddComponent.prototype.beforeCreate = function () {
        var _this = this;
        this.direktoriProjekService.postDirektoriProjeks(this.dataProjek).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.id_projek = data.data.id_projek;
            console.log(data.data.id_projek);
            _this.getAnggota();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di load data');
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            keterangan_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_mulai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_selesai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nilai_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nilai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            prioritas: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nomor_kontrak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            tanggal_kontrak: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_pegawai_leader: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    };
    AddComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataProjek = this.dataForm.value;
        this.direktoriProjekService.putDirektoriProjeksIdResponse({ id: this.id_projek, body: this.dataProjek }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    AddComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/development/proyek/list']);
    };
    AddComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekAnggotaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzNotificationService"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/proyek/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/pages/hr/direktori/general/proyek/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekAnggotaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzNotificationService"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_4__["FormBuilderTypeSafe"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/detail/detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/detail/detail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9nZW5lcmFsL3Byb3llay9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/detail/detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/detail/detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/approval/standar/standar-approval.service */ "./src/app/components/approval/standar/standar-approval.service.ts");
/* harmony import */ var src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services/direktori-pegawai.service */ "./src/app/sdk/hr/services/direktori-pegawai.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_user_services_tools_log_flow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sdk/user/services/tools-log-flow.service */ "./src/app/sdk/user/services/tools-log-flow.service.ts");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(direktoriProjekService, direktoriProjekAnggotaService, spinner, routerActive, router, direktoriPegawaiService, standarApprovalService, toolsLogFlowService) {
        this.direktoriProjekService = direktoriProjekService;
        this.direktoriProjekAnggotaService = direktoriProjekAnggotaService;
        this.spinner = spinner;
        this.routerActive = routerActive;
        this.router = router;
        this.direktoriPegawaiService = direktoriPegawaiService;
        this.standarApprovalService = standarApprovalService;
        this.toolsLogFlowService = toolsLogFlowService;
        this.id_projek = '';
        this.dataProjek = {};
        this.dataPegawai = {};
        this.dataProjekAnggota = [];
        this.params = null;
        this.id_data_flow = '';
        this.listLog = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerActive.paramMap.subscribe(function (params) {
            console.log(params.get('id_projek'));
            if (params.get('id_projek')) {
                _this.id_projek = params.get('id_projek');
            }
            _this.getDetailProjek();
            _this.getProjekAnggota();
            _this.getLog();
        });
        this.standarApprovalService.isreload.next(false);
        this.standarApprovalService.getisreload().subscribe(function (data) {
            if (data) {
                _this.getDetailProjek();
                _this.getProjekAnggota();
                _this.getLog();
            }
        });
    };
    //-----projek------
    DetailComponent.prototype.getDetailProjek = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekService.getDirektoriProjeksId(this.id_projek).subscribe(function (data) {
            _this.dataProjek = data.data;
            _this.getPegawai(data.data.id_pegawai_leader);
            _this.params = {
                id: data.data.id_projek,
                id_data_flow_detail: data.data.id_data_flow_detail,
                id_data_flow: data.data.id_data_flow,
                next_status: null,
                primary_key: "id_projek"
            };
            _this.standarApprovalService.param.next(_this.params);
        });
    };
    DetailComponent.prototype.getPegawai = function (id_pegawai_leader) {
        var _this = this;
        this.direktoriPegawaiService.getDirektoriPegawaisId(id_pegawai_leader).subscribe(function (data) {
            _this.dataPegawai = data.data;
        });
    };
    //----projek-anggota------//
    DetailComponent.prototype.getProjekAnggota = function () {
        var _this = this;
        this.direktoriProjekAnggotaService.getDirektoriProjekAnggotas(JSON.stringify({ id_projek: this.id_projek })).subscribe(function (res) {
            _this.dataProjekAnggota = res.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.getLog = function () {
        var _this = this;
        this.spinner.show();
        this.toolsLogFlowService.getToolsLogFlows(JSON.stringify({ for_module_id: this.id_projek })).subscribe(function (data) {
            _this.listLog = data.data;
            _this.spinner.hide();
        });
    };
    DetailComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/development/proyek/list']);
    };
    DetailComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriProjekService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriProjekAnggotaService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"] },
        { type: src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"] },
        { type: src_app_sdk_user_services_tools_log_flow_service__WEBPACK_IMPORTED_MODULE_7__["ToolsLogFlowService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/proyek/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/hr/direktori/general/proyek/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriProjekService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_5__["DirektoriProjekAnggotaService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_sdk_hr_services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_2__["DirektoriPegawaiService"],
            src_app_components_approval_standar_standar_approval_service__WEBPACK_IMPORTED_MODULE_1__["StandarApprovalService"],
            src_app_sdk_user_services_tools_log_flow_service__WEBPACK_IMPORTED_MODULE_7__["ToolsLogFlowService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/edit/edit.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/edit/edit.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9nZW5lcmFsL3Byb3llay9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/edit/edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/edit/edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/document/single-upload.service */ "./src/app/components/document/single-upload.service.ts");










var EditComponent = /** @class */ (function () {
    function EditComponent(direktoriProjekService, direktoriPegawaiMasterService, direktoriProjekAnggotaService, singleUploadService, spinner, notification, pesan, router, routerActive, fb) {
        this.direktoriProjekService = direktoriProjekService;
        this.direktoriPegawaiMasterService = direktoriPegawaiMasterService;
        this.direktoriProjekAnggotaService = direktoriProjekAnggotaService;
        this.singleUploadService = singleUploadService;
        this.spinner = spinner;
        this.notification = notification;
        this.pesan = pesan;
        this.router = router;
        this.routerActive = routerActive;
        this.fb = fb;
        this.dataProjekAnggota = [];
        this.dataProjek = {};
        this.id_projek = '';
        this.listPegawai = [];
        this.toogleUpload = false;
        this.id_projek_anggota = '';
        this.listAnggota = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_projek = this.routerActive.snapshot.paramMap.get('id_projek');
        this.form();
        this.getData();
        this.getListPegawai();
        this.singleUploadService.getCallback().subscribe(function (data) {
            if (data == 'hr_project.finish') {
                _this.toogleUpload = false;
            }
        });
        this.singleUploadService.getId().subscribe(function (data) {
            if (data) {
                _this.dataForm.patchValue({ id_dokumen: data });
                _this.simpan();
            }
        });
    };
    EditComponent.prototype.togleShowUpload = function () {
        this.toogleUpload = true;
    };
    EditComponent.prototype.getListPegawai = function () {
        var _this = this;
        this.direktoriPegawaiMasterService.getDirektoriPegawaiMasters().subscribe(function (data) {
            _this.listPegawai = data.data;
        });
    };
    EditComponent.prototype.tambahAnggota = function () {
        var _this = this;
        if (this.id_projek_anggota == '') {
            this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
            return false;
        }
        this.direktoriProjekAnggotaService.postDirektoriProjekAnggotas({ id_pegawai: this.id_projek_anggota, id_projek: this.id_projek }).subscribe(function (res) {
            _this.getAnggota();
        });
    };
    EditComponent.prototype.getAnggota = function () {
        var _this = this;
        var filter = {
            id_projek: this.id_projek
        };
        this.direktoriProjekAnggotaService.getDirektoriProjekAnggotas(JSON.stringify(filter)).subscribe(function (res) {
            _this.listAnggota = res.data;
        });
    };
    EditComponent.prototype.deleteAnggota = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekAnggotaService.deleteDirektoriProjekAnggotasId(id).subscribe(function (data) {
            _this.getAnggota();
            _this.spinner.hide();
        });
    };
    EditComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekService.getDirektoriProjeksId(this.id_projek).subscribe(function (data) {
            _this.dataForm.setValue(data.data);
            _this.getAnggota();
            _this.spinner.hide();
            _this.singleUploadService.param.next({
                for_module: "hr_project",
                for_table: "erp_hr.projek",
                for_module_id: data.data.id_projek
            });
        });
    };
    EditComponent.prototype.form = function () {
        this.dataForm = this.fb.group({
            nama_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            keterangan_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_mulai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_selesai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nilai_tipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nilai_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            prioritas: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_projek: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor_kontrak: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            validasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            tanggal_kontrak: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_pegawai_leader: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_dokumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow_detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            id_data_flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            posisi: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            nomor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
        });
    };
    EditComponent.prototype.simpan = function () {
        var _this = this;
        this.spinner.show();
        if (this.dataForm.invalid) {
            this.pesan.pesanWarningForm('Form Tidak Valid');
            this.spinner.hide();
            return;
        }
        this.dataProjek = this.dataForm.value;
        this.direktoriProjekService.putDirektoriProjeksIdResponse({ id: this.id_projek, body: this.dataProjek }).subscribe(function (data) {
            _this.goToBack();
            _this.spinner.hide();
        }, function (err) {
            _this.pesan.pesanWarningForm('Gagal di simpan');
            _this.spinner.hide();
        }, function () {
            console.log('HTTP request completed.');
        });
    };
    EditComponent.prototype.goToBack = function () {
        this.router.navigate(['/hr/direktori/development/proyek/list']);
    };
    EditComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriProjekService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"] },
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriProjekAnggotaService"] },
        { type: src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"] }
    ]; };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/proyek/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/hr/direktori/general/proyek/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriProjekService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriPegawaiMasterService"],
            src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_3__["DirektoriProjekAnggotaService"],
            src_app_components_document_single_upload_service__WEBPACK_IMPORTED_MODULE_9__["SingleUploadService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_6__["PesanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_7__["FormBuilderTypeSafe"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/list/list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/list/list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hyL2RpcmVrdG9yaS9nZW5lcmFsL3Byb3llay9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/list/list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/list/list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sdk/hr/services */ "./src/app/sdk/hr/services.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tool/pesan.service */ "./src/app/services/tool/pesan.service.ts");






var ListComponent = /** @class */ (function () {
    function ListComponent(direktoriProjekService, spinner, pesan, nzMessageService) {
        this.direktoriProjekService = direktoriProjekService;
        this.spinner = spinner;
        this.pesan = pesan;
        this.nzMessageService = nzMessageService;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.total = 1;
        this.listOfData = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.search = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        this.searchData();
    };
    ListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    ListComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        this.direktoriProjekService.getDirektoriProjeks(JSON.stringify({
            pageIndex: this.pageIndex, pageSize: this.pageSize, sortKey: this.sortKey, sortValue: this.sortValue, search: this.search
        }))
            .subscribe(function (data) {
            _this.loading = false;
            _this.total = data.data.total;
            _this.listOfData = data.data.data;
            console.log(data.data);
        });
    };
    ListComponent.prototype.updateFilter = function (value) {
        this.search = value;
        this.searchData(true);
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.direktoriProjekService.deleteDirektoriProjeksId(id).subscribe(function (data) {
            _this.searchData();
        }, function (err) {
            _this.pesan.pesanWarningForm('Data tidak boleh di delete');
            _this.spinner.hide();
        });
    };
    ListComponent.prototype.batalDelete = function () {
        this.nzMessageService.info('click cancel');
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hr/direktori/general/proyek/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/hr/direktori/general/proyek/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sdk_hr_services__WEBPACK_IMPORTED_MODULE_2__["DirektoriProjekService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_services_tool_pesan_service__WEBPACK_IMPORTED_MODULE_5__["PesanService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/proyek-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/proyek-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProyekRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyekRoutingModule", function() { return ProyekRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/general/proyek/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/general/proyek/add/add.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/general/proyek/detail/detail.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/general/proyek/list/list.component.ts");







var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]
    },
    {
        path: 'edit/:id_projek',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'detail/:id_projek',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]
    }
];
var ProyekRoutingModule = /** @class */ (function () {
    function ProyekRoutingModule() {
    }
    ProyekRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProyekRoutingModule);
    return ProyekRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/hr/direktori/general/proyek/proyek.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/hr/direktori/general/proyek/proyek.module.ts ***!
  \********************************************************************/
/*! exports provided: ProyekModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyekModule", function() { return ProyekModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _proyek_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proyek-routing.module */ "./src/app/pages/hr/direktori/general/proyek/proyek-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/hr/direktori/general/proyek/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/pages/hr/direktori/general/proyek/add/add.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/pages/hr/direktori/general/proyek/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/pages/hr/direktori/general/proyek/edit/edit.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/angular-reactive-forms-helper */ "./src/app/services/angular-reactive-forms-helper.ts");
/* harmony import */ var src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/approval/approval.module */ "./src/app/components/approval/approval.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/document/document.module */ "./src/app/components/document/document.module.ts");














var ProyekModule = /** @class */ (function () {
    function ProyekModule() {
    }
    ProyekModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _proyek_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProyekRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_approval_approval_module__WEBPACK_IMPORTED_MODULE_11__["ApprovalModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_12__["PipeModule"],
                src_app_components_document_document_module__WEBPACK_IMPORTED_MODULE_13__["DocumentModule"]
            ],
            providers: [
                src_app_services_angular_reactive_forms_helper__WEBPACK_IMPORTED_MODULE_10__["FormBuilderTypeSafe"]
            ]
        })
    ], ProyekModule);
    return ProyekModule;
}());



/***/ }),

/***/ "./src/app/sdk/hr/services.ts":
/*!************************************!*\
  !*** ./src/app/sdk/hr/services.ts ***!
  \************************************/
/*! exports provided: AbsensiJadwalPegawaiTerjadwalService, AbsensiJadwalTipeService, AbsensiJadwalTipeNormalDetailService, AbsensiKehadiranService, AbsensiRekapKehadiranService, AbsensiPilotAircraftService, AbsensiPilotJadwalDetailService, AbsensiPilotRonService, AkunBillingService, AkunBillingCategoryService, AkunCashAdvanceService, AkunExpensesSummaryService, AkunExpensesSummaryItemService, AkunReimburseService, AkunReimburseItemService, AkunUntukAkunService, CompanyAcaraService, CompanyDepartemenService, CompanyDivisiService, CompanyJabatanService, CompanyKantorService, CompanyLettersService, CompanyLisensiService, CompanyPangkatService, CompanyPengumumanService, CompanyPerizinanService, CompanyPerusahaanService, DirektoriBankAccountService, DirektoriHrNotesService, DirektoriKalenderPerusahaanService, DirektoriLisensiTipeService, DirektoriPegawaiService, DirektoriPegawaiBiodataService, DirektoriPegawaiCardService, DirektoriPegawaiEmergencyService, DirektoriPegawaiKeahlianService, DirektoriPegawaiKeluargaService, DirektoriPegawaiKeluargalistService, DirektoriPegawaiLisensiService, DirektoriPegawaiMasterService, DirektoriPegawaiPendidikanService, DirektoriPegawaiPendidikanInformalService, DirektoriPegawaiPengalamanService, DirektoriPegawaiPosisiService, DirektoriPegawaiSpService, DirektoriPegawaiStatusService, DirektoriPegawaiTypeService, DirektoriPelamarService, DirektoriPelamarBiodataService, DirektoriPelamarEmergencyService, DirektoriPelamarIdcardService, DirektoriPelamarKeahlianService, DirektoriPelamarKeluargaService, DirektoriPelamarKeluargalistService, DirektoriPelamarPendidikanService, DirektoriPelamarPendidikanInformalService, DirektoriPelamarPengalamanService, DirektoriPenilaianPelamarService, DirektoriPerjalananDinasService, DirektoriPerjalananDinasAnggotaService, DirektoriPerjalananDinasRonService, DirektoriPermintaanPegawaiService, DirektoriPermintaanPegawaiListService, DirektoriProjekService, DirektoriProjekAnggotaService, DirektoriPromosiService, DirektoriResignService, DirektoriSpTipeService, DirektoriTerminationService, DirektoriTrainingService, DirektoriTrainingAnggotaService, DirektoriTrainingTrainerService, DirektoriVPegawaiPosisiService, FileDokumenService, FlowDataFlowService, FlowDataFlowDetailService, FlowLogFlowService, GaBiayaService, GaBiayaRincianService, GaHotelService, GaKlaimItemService, GaKlaimKategoriService, GaKlaimPengajuanService, GaKlaimPengaturanService, GaPembelianService, GaPembelianItemService, GaTiketService, GaTransportService, GaUniformService, GaUniformMasterService, GaUniformMasterxService, GaUntukService, KalenderCutiKategoriService, KalenderCutiPengajuanService, KalenderCutiPengajuanTanggalService, KalenderCutiPengaturanService, KalenderCutiPengaturanPerpegawaiService, KalenderLemburPengaturanService, KalenderLemburService, PayrollPtkpService, PayrollPilotMasterRatePilotService, PayrollPilotPekerjaanService, PayrollPilotRatePilotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_absensi_jadwal_pegawai_terjadwal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/absensi-jadwal-pegawai-terjadwal.service */ "./src/app/sdk/hr/services/absensi-jadwal-pegawai-terjadwal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalPegawaiTerjadwalService", function() { return _services_absensi_jadwal_pegawai_terjadwal_service__WEBPACK_IMPORTED_MODULE_0__["AbsensiJadwalPegawaiTerjadwalService"]; });

/* harmony import */ var _services_absensi_jadwal_tipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/absensi-jadwal-tipe.service */ "./src/app/sdk/hr/services/absensi-jadwal-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalTipeService", function() { return _services_absensi_jadwal_tipe_service__WEBPACK_IMPORTED_MODULE_1__["AbsensiJadwalTipeService"]; });

/* harmony import */ var _services_absensi_jadwal_tipe_normal_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/absensi-jadwal-tipe-normal-detail.service */ "./src/app/sdk/hr/services/absensi-jadwal-tipe-normal-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiJadwalTipeNormalDetailService", function() { return _services_absensi_jadwal_tipe_normal_detail_service__WEBPACK_IMPORTED_MODULE_2__["AbsensiJadwalTipeNormalDetailService"]; });

/* harmony import */ var _services_absensi_kehadiran_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/absensi-kehadiran.service */ "./src/app/sdk/hr/services/absensi-kehadiran.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiKehadiranService", function() { return _services_absensi_kehadiran_service__WEBPACK_IMPORTED_MODULE_3__["AbsensiKehadiranService"]; });

/* harmony import */ var _services_absensi_rekap_kehadiran_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/absensi-rekap-kehadiran.service */ "./src/app/sdk/hr/services/absensi-rekap-kehadiran.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiRekapKehadiranService", function() { return _services_absensi_rekap_kehadiran_service__WEBPACK_IMPORTED_MODULE_4__["AbsensiRekapKehadiranService"]; });

/* harmony import */ var _services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/absensi-pilot-aircraft.service */ "./src/app/sdk/hr/services/absensi-pilot-aircraft.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotAircraftService", function() { return _services_absensi_pilot_aircraft_service__WEBPACK_IMPORTED_MODULE_5__["AbsensiPilotAircraftService"]; });

/* harmony import */ var _services_absensi_pilot_jadwal_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/absensi-pilot-jadwal-detail.service */ "./src/app/sdk/hr/services/absensi-pilot-jadwal-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotJadwalDetailService", function() { return _services_absensi_pilot_jadwal_detail_service__WEBPACK_IMPORTED_MODULE_6__["AbsensiPilotJadwalDetailService"]; });

/* harmony import */ var _services_absensi_pilot_ron_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/absensi-pilot-ron.service */ "./src/app/sdk/hr/services/absensi-pilot-ron.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbsensiPilotRonService", function() { return _services_absensi_pilot_ron_service__WEBPACK_IMPORTED_MODULE_7__["AbsensiPilotRonService"]; });

/* harmony import */ var _services_akun_billing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/akun-billing.service */ "./src/app/sdk/hr/services/akun-billing.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunBillingService", function() { return _services_akun_billing_service__WEBPACK_IMPORTED_MODULE_8__["AkunBillingService"]; });

/* harmony import */ var _services_akun_billing_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/akun-billing-category.service */ "./src/app/sdk/hr/services/akun-billing-category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunBillingCategoryService", function() { return _services_akun_billing_category_service__WEBPACK_IMPORTED_MODULE_9__["AkunBillingCategoryService"]; });

/* harmony import */ var _services_akun_cash_advance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/akun-cash-advance.service */ "./src/app/sdk/hr/services/akun-cash-advance.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunCashAdvanceService", function() { return _services_akun_cash_advance_service__WEBPACK_IMPORTED_MODULE_10__["AkunCashAdvanceService"]; });

/* harmony import */ var _services_akun_expenses_summary_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/akun-expenses-summary.service */ "./src/app/sdk/hr/services/akun-expenses-summary.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunExpensesSummaryService", function() { return _services_akun_expenses_summary_service__WEBPACK_IMPORTED_MODULE_11__["AkunExpensesSummaryService"]; });

/* harmony import */ var _services_akun_expenses_summary_item_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/akun-expenses-summary-item.service */ "./src/app/sdk/hr/services/akun-expenses-summary-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunExpensesSummaryItemService", function() { return _services_akun_expenses_summary_item_service__WEBPACK_IMPORTED_MODULE_12__["AkunExpensesSummaryItemService"]; });

/* harmony import */ var _services_akun_reimburse_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/akun-reimburse.service */ "./src/app/sdk/hr/services/akun-reimburse.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunReimburseService", function() { return _services_akun_reimburse_service__WEBPACK_IMPORTED_MODULE_13__["AkunReimburseService"]; });

/* harmony import */ var _services_akun_reimburse_item_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/akun-reimburse-item.service */ "./src/app/sdk/hr/services/akun-reimburse-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunReimburseItemService", function() { return _services_akun_reimburse_item_service__WEBPACK_IMPORTED_MODULE_14__["AkunReimburseItemService"]; });

/* harmony import */ var _services_akun_untuk_akun_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/akun-untuk-akun.service */ "./src/app/sdk/hr/services/akun-untuk-akun.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AkunUntukAkunService", function() { return _services_akun_untuk_akun_service__WEBPACK_IMPORTED_MODULE_15__["AkunUntukAkunService"]; });

/* harmony import */ var _services_company_acara_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/company-acara.service */ "./src/app/sdk/hr/services/company-acara.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyAcaraService", function() { return _services_company_acara_service__WEBPACK_IMPORTED_MODULE_16__["CompanyAcaraService"]; });

/* harmony import */ var _services_company_departemen_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/company-departemen.service */ "./src/app/sdk/hr/services/company-departemen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyDepartemenService", function() { return _services_company_departemen_service__WEBPACK_IMPORTED_MODULE_17__["CompanyDepartemenService"]; });

/* harmony import */ var _services_company_divisi_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/company-divisi.service */ "./src/app/sdk/hr/services/company-divisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyDivisiService", function() { return _services_company_divisi_service__WEBPACK_IMPORTED_MODULE_18__["CompanyDivisiService"]; });

/* harmony import */ var _services_company_jabatan_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/company-jabatan.service */ "./src/app/sdk/hr/services/company-jabatan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyJabatanService", function() { return _services_company_jabatan_service__WEBPACK_IMPORTED_MODULE_19__["CompanyJabatanService"]; });

/* harmony import */ var _services_company_kantor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/company-kantor.service */ "./src/app/sdk/hr/services/company-kantor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyKantorService", function() { return _services_company_kantor_service__WEBPACK_IMPORTED_MODULE_20__["CompanyKantorService"]; });

/* harmony import */ var _services_company_letters_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/company-letters.service */ "./src/app/sdk/hr/services/company-letters.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLettersService", function() { return _services_company_letters_service__WEBPACK_IMPORTED_MODULE_21__["CompanyLettersService"]; });

/* harmony import */ var _services_company_lisensi_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/company-lisensi.service */ "./src/app/sdk/hr/services/company-lisensi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLisensiService", function() { return _services_company_lisensi_service__WEBPACK_IMPORTED_MODULE_22__["CompanyLisensiService"]; });

/* harmony import */ var _services_company_pangkat_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/company-pangkat.service */ "./src/app/sdk/hr/services/company-pangkat.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPangkatService", function() { return _services_company_pangkat_service__WEBPACK_IMPORTED_MODULE_23__["CompanyPangkatService"]; });

/* harmony import */ var _services_company_pengumuman_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/company-pengumuman.service */ "./src/app/sdk/hr/services/company-pengumuman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPengumumanService", function() { return _services_company_pengumuman_service__WEBPACK_IMPORTED_MODULE_24__["CompanyPengumumanService"]; });

/* harmony import */ var _services_company_perizinan_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/company-perizinan.service */ "./src/app/sdk/hr/services/company-perizinan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPerizinanService", function() { return _services_company_perizinan_service__WEBPACK_IMPORTED_MODULE_25__["CompanyPerizinanService"]; });

/* harmony import */ var _services_company_perusahaan_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/company-perusahaan.service */ "./src/app/sdk/hr/services/company-perusahaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyPerusahaanService", function() { return _services_company_perusahaan_service__WEBPACK_IMPORTED_MODULE_26__["CompanyPerusahaanService"]; });

/* harmony import */ var _services_direktori_bank_account_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/direktori-bank-account.service */ "./src/app/sdk/hr/services/direktori-bank-account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriBankAccountService", function() { return _services_direktori_bank_account_service__WEBPACK_IMPORTED_MODULE_27__["DirektoriBankAccountService"]; });

/* harmony import */ var _services_direktori_hr_notes_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/direktori-hr-notes.service */ "./src/app/sdk/hr/services/direktori-hr-notes.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriHrNotesService", function() { return _services_direktori_hr_notes_service__WEBPACK_IMPORTED_MODULE_28__["DirektoriHrNotesService"]; });

/* harmony import */ var _services_direktori_kalender_perusahaan_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/direktori-kalender-perusahaan.service */ "./src/app/sdk/hr/services/direktori-kalender-perusahaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriKalenderPerusahaanService", function() { return _services_direktori_kalender_perusahaan_service__WEBPACK_IMPORTED_MODULE_29__["DirektoriKalenderPerusahaanService"]; });

/* harmony import */ var _services_direktori_lisensi_tipe_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/direktori-lisensi-tipe.service */ "./src/app/sdk/hr/services/direktori-lisensi-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriLisensiTipeService", function() { return _services_direktori_lisensi_tipe_service__WEBPACK_IMPORTED_MODULE_30__["DirektoriLisensiTipeService"]; });

/* harmony import */ var _services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/direktori-pegawai.service */ "./src/app/sdk/hr/services/direktori-pegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiService", function() { return _services_direktori_pegawai_service__WEBPACK_IMPORTED_MODULE_31__["DirektoriPegawaiService"]; });

/* harmony import */ var _services_direktori_pegawai_biodata_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/direktori-pegawai-biodata.service */ "./src/app/sdk/hr/services/direktori-pegawai-biodata.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiBiodataService", function() { return _services_direktori_pegawai_biodata_service__WEBPACK_IMPORTED_MODULE_32__["DirektoriPegawaiBiodataService"]; });

/* harmony import */ var _services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/direktori-pegawai-card.service */ "./src/app/sdk/hr/services/direktori-pegawai-card.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiCardService", function() { return _services_direktori_pegawai_card_service__WEBPACK_IMPORTED_MODULE_33__["DirektoriPegawaiCardService"]; });

/* harmony import */ var _services_direktori_pegawai_emergency_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/direktori-pegawai-emergency.service */ "./src/app/sdk/hr/services/direktori-pegawai-emergency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiEmergencyService", function() { return _services_direktori_pegawai_emergency_service__WEBPACK_IMPORTED_MODULE_34__["DirektoriPegawaiEmergencyService"]; });

/* harmony import */ var _services_direktori_pegawai_keahlian_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/direktori-pegawai-keahlian.service */ "./src/app/sdk/hr/services/direktori-pegawai-keahlian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeahlianService", function() { return _services_direktori_pegawai_keahlian_service__WEBPACK_IMPORTED_MODULE_35__["DirektoriPegawaiKeahlianService"]; });

/* harmony import */ var _services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/direktori-pegawai-keluarga.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluarga.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeluargaService", function() { return _services_direktori_pegawai_keluarga_service__WEBPACK_IMPORTED_MODULE_36__["DirektoriPegawaiKeluargaService"]; });

/* harmony import */ var _services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/direktori-pegawai-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pegawai-keluargalist.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiKeluargalistService", function() { return _services_direktori_pegawai_keluargalist_service__WEBPACK_IMPORTED_MODULE_37__["DirektoriPegawaiKeluargalistService"]; });

/* harmony import */ var _services_direktori_pegawai_lisensi_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/direktori-pegawai-lisensi.service */ "./src/app/sdk/hr/services/direktori-pegawai-lisensi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiLisensiService", function() { return _services_direktori_pegawai_lisensi_service__WEBPACK_IMPORTED_MODULE_38__["DirektoriPegawaiLisensiService"]; });

/* harmony import */ var _services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/direktori-pegawai-master.service */ "./src/app/sdk/hr/services/direktori-pegawai-master.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiMasterService", function() { return _services_direktori_pegawai_master_service__WEBPACK_IMPORTED_MODULE_39__["DirektoriPegawaiMasterService"]; });

/* harmony import */ var _services_direktori_pegawai_pendidikan_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/direktori-pegawai-pendidikan.service */ "./src/app/sdk/hr/services/direktori-pegawai-pendidikan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPendidikanService", function() { return _services_direktori_pegawai_pendidikan_service__WEBPACK_IMPORTED_MODULE_40__["DirektoriPegawaiPendidikanService"]; });

/* harmony import */ var _services_direktori_pegawai_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/direktori-pegawai-pendidikan-informal.service */ "./src/app/sdk/hr/services/direktori-pegawai-pendidikan-informal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPendidikanInformalService", function() { return _services_direktori_pegawai_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_41__["DirektoriPegawaiPendidikanInformalService"]; });

/* harmony import */ var _services_direktori_pegawai_pengalaman_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/direktori-pegawai-pengalaman.service */ "./src/app/sdk/hr/services/direktori-pegawai-pengalaman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPengalamanService", function() { return _services_direktori_pegawai_pengalaman_service__WEBPACK_IMPORTED_MODULE_42__["DirektoriPegawaiPengalamanService"]; });

/* harmony import */ var _services_direktori_pegawai_posisi_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/direktori-pegawai-posisi.service */ "./src/app/sdk/hr/services/direktori-pegawai-posisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiPosisiService", function() { return _services_direktori_pegawai_posisi_service__WEBPACK_IMPORTED_MODULE_43__["DirektoriPegawaiPosisiService"]; });

/* harmony import */ var _services_direktori_pegawai_sp_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/direktori-pegawai-sp.service */ "./src/app/sdk/hr/services/direktori-pegawai-sp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiSpService", function() { return _services_direktori_pegawai_sp_service__WEBPACK_IMPORTED_MODULE_44__["DirektoriPegawaiSpService"]; });

/* harmony import */ var _services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/direktori-pegawai-status.service */ "./src/app/sdk/hr/services/direktori-pegawai-status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiStatusService", function() { return _services_direktori_pegawai_status_service__WEBPACK_IMPORTED_MODULE_45__["DirektoriPegawaiStatusService"]; });

/* harmony import */ var _services_direktori_pegawai_type_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/direktori-pegawai-type.service */ "./src/app/sdk/hr/services/direktori-pegawai-type.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPegawaiTypeService", function() { return _services_direktori_pegawai_type_service__WEBPACK_IMPORTED_MODULE_46__["DirektoriPegawaiTypeService"]; });

/* harmony import */ var _services_direktori_pelamar_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/direktori-pelamar.service */ "./src/app/sdk/hr/services/direktori-pelamar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarService", function() { return _services_direktori_pelamar_service__WEBPACK_IMPORTED_MODULE_47__["DirektoriPelamarService"]; });

/* harmony import */ var _services_direktori_pelamar_biodata_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/direktori-pelamar-biodata.service */ "./src/app/sdk/hr/services/direktori-pelamar-biodata.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarBiodataService", function() { return _services_direktori_pelamar_biodata_service__WEBPACK_IMPORTED_MODULE_48__["DirektoriPelamarBiodataService"]; });

/* harmony import */ var _services_direktori_pelamar_emergency_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/direktori-pelamar-emergency.service */ "./src/app/sdk/hr/services/direktori-pelamar-emergency.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarEmergencyService", function() { return _services_direktori_pelamar_emergency_service__WEBPACK_IMPORTED_MODULE_49__["DirektoriPelamarEmergencyService"]; });

/* harmony import */ var _services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/direktori-pelamar-idcard.service */ "./src/app/sdk/hr/services/direktori-pelamar-idcard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarIdcardService", function() { return _services_direktori_pelamar_idcard_service__WEBPACK_IMPORTED_MODULE_50__["DirektoriPelamarIdcardService"]; });

/* harmony import */ var _services_direktori_pelamar_keahlian_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/direktori-pelamar-keahlian.service */ "./src/app/sdk/hr/services/direktori-pelamar-keahlian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeahlianService", function() { return _services_direktori_pelamar_keahlian_service__WEBPACK_IMPORTED_MODULE_51__["DirektoriPelamarKeahlianService"]; });

/* harmony import */ var _services_direktori_pelamar_keluarga_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/direktori-pelamar-keluarga.service */ "./src/app/sdk/hr/services/direktori-pelamar-keluarga.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeluargaService", function() { return _services_direktori_pelamar_keluarga_service__WEBPACK_IMPORTED_MODULE_52__["DirektoriPelamarKeluargaService"]; });

/* harmony import */ var _services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/direktori-pelamar-keluargalist.service */ "./src/app/sdk/hr/services/direktori-pelamar-keluargalist.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarKeluargalistService", function() { return _services_direktori_pelamar_keluargalist_service__WEBPACK_IMPORTED_MODULE_53__["DirektoriPelamarKeluargalistService"]; });

/* harmony import */ var _services_direktori_pelamar_pendidikan_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./services/direktori-pelamar-pendidikan.service */ "./src/app/sdk/hr/services/direktori-pelamar-pendidikan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPendidikanService", function() { return _services_direktori_pelamar_pendidikan_service__WEBPACK_IMPORTED_MODULE_54__["DirektoriPelamarPendidikanService"]; });

/* harmony import */ var _services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./services/direktori-pelamar-pendidikan-informal.service */ "./src/app/sdk/hr/services/direktori-pelamar-pendidikan-informal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPendidikanInformalService", function() { return _services_direktori_pelamar_pendidikan_informal_service__WEBPACK_IMPORTED_MODULE_55__["DirektoriPelamarPendidikanInformalService"]; });

/* harmony import */ var _services_direktori_pelamar_pengalaman_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./services/direktori-pelamar-pengalaman.service */ "./src/app/sdk/hr/services/direktori-pelamar-pengalaman.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPelamarPengalamanService", function() { return _services_direktori_pelamar_pengalaman_service__WEBPACK_IMPORTED_MODULE_56__["DirektoriPelamarPengalamanService"]; });

/* harmony import */ var _services_direktori_penilaian_pelamar_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./services/direktori-penilaian-pelamar.service */ "./src/app/sdk/hr/services/direktori-penilaian-pelamar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPenilaianPelamarService", function() { return _services_direktori_penilaian_pelamar_service__WEBPACK_IMPORTED_MODULE_57__["DirektoriPenilaianPelamarService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasService", function() { return _services_direktori_perjalanan_dinas_service__WEBPACK_IMPORTED_MODULE_58__["DirektoriPerjalananDinasService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_anggota_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas-anggota.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasAnggotaService", function() { return _services_direktori_perjalanan_dinas_anggota_service__WEBPACK_IMPORTED_MODULE_59__["DirektoriPerjalananDinasAnggotaService"]; });

/* harmony import */ var _services_direktori_perjalanan_dinas_ron_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./services/direktori-perjalanan-dinas-ron.service */ "./src/app/sdk/hr/services/direktori-perjalanan-dinas-ron.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPerjalananDinasRonService", function() { return _services_direktori_perjalanan_dinas_ron_service__WEBPACK_IMPORTED_MODULE_60__["DirektoriPerjalananDinasRonService"]; });

/* harmony import */ var _services_direktori_permintaan_pegawai_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./services/direktori-permintaan-pegawai.service */ "./src/app/sdk/hr/services/direktori-permintaan-pegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPermintaanPegawaiService", function() { return _services_direktori_permintaan_pegawai_service__WEBPACK_IMPORTED_MODULE_61__["DirektoriPermintaanPegawaiService"]; });

/* harmony import */ var _services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./services/direktori-permintaan-pegawai-list.service */ "./src/app/sdk/hr/services/direktori-permintaan-pegawai-list.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPermintaanPegawaiListService", function() { return _services_direktori_permintaan_pegawai_list_service__WEBPACK_IMPORTED_MODULE_62__["DirektoriPermintaanPegawaiListService"]; });

/* harmony import */ var _services_direktori_projek_service__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./services/direktori-projek.service */ "./src/app/sdk/hr/services/direktori-projek.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriProjekService", function() { return _services_direktori_projek_service__WEBPACK_IMPORTED_MODULE_63__["DirektoriProjekService"]; });

/* harmony import */ var _services_direktori_projek_anggota_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./services/direktori-projek-anggota.service */ "./src/app/sdk/hr/services/direktori-projek-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriProjekAnggotaService", function() { return _services_direktori_projek_anggota_service__WEBPACK_IMPORTED_MODULE_64__["DirektoriProjekAnggotaService"]; });

/* harmony import */ var _services_direktori_promosi_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./services/direktori-promosi.service */ "./src/app/sdk/hr/services/direktori-promosi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriPromosiService", function() { return _services_direktori_promosi_service__WEBPACK_IMPORTED_MODULE_65__["DirektoriPromosiService"]; });

/* harmony import */ var _services_direktori_resign_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./services/direktori-resign.service */ "./src/app/sdk/hr/services/direktori-resign.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriResignService", function() { return _services_direktori_resign_service__WEBPACK_IMPORTED_MODULE_66__["DirektoriResignService"]; });

/* harmony import */ var _services_direktori_sp_tipe_service__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./services/direktori-sp-tipe.service */ "./src/app/sdk/hr/services/direktori-sp-tipe.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriSpTipeService", function() { return _services_direktori_sp_tipe_service__WEBPACK_IMPORTED_MODULE_67__["DirektoriSpTipeService"]; });

/* harmony import */ var _services_direktori_termination_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./services/direktori-termination.service */ "./src/app/sdk/hr/services/direktori-termination.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTerminationService", function() { return _services_direktori_termination_service__WEBPACK_IMPORTED_MODULE_68__["DirektoriTerminationService"]; });

/* harmony import */ var _services_direktori_training_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./services/direktori-training.service */ "./src/app/sdk/hr/services/direktori-training.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingService", function() { return _services_direktori_training_service__WEBPACK_IMPORTED_MODULE_69__["DirektoriTrainingService"]; });

/* harmony import */ var _services_direktori_training_anggota_service__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./services/direktori-training-anggota.service */ "./src/app/sdk/hr/services/direktori-training-anggota.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingAnggotaService", function() { return _services_direktori_training_anggota_service__WEBPACK_IMPORTED_MODULE_70__["DirektoriTrainingAnggotaService"]; });

/* harmony import */ var _services_direktori_training_trainer_service__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./services/direktori-training-trainer.service */ "./src/app/sdk/hr/services/direktori-training-trainer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriTrainingTrainerService", function() { return _services_direktori_training_trainer_service__WEBPACK_IMPORTED_MODULE_71__["DirektoriTrainingTrainerService"]; });

/* harmony import */ var _services_direktori_vpegawai_posisi_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./services/direktori-vpegawai-posisi.service */ "./src/app/sdk/hr/services/direktori-vpegawai-posisi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirektoriVPegawaiPosisiService", function() { return _services_direktori_vpegawai_posisi_service__WEBPACK_IMPORTED_MODULE_72__["DirektoriVPegawaiPosisiService"]; });

/* harmony import */ var _services_file_dokumen_service__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./services/file-dokumen.service */ "./src/app/sdk/hr/services/file-dokumen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileDokumenService", function() { return _services_file_dokumen_service__WEBPACK_IMPORTED_MODULE_73__["FileDokumenService"]; });

/* harmony import */ var _services_flow_data_flow_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./services/flow-data-flow.service */ "./src/app/sdk/hr/services/flow-data-flow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowDataFlowService", function() { return _services_flow_data_flow_service__WEBPACK_IMPORTED_MODULE_74__["FlowDataFlowService"]; });

/* harmony import */ var _services_flow_data_flow_detail_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./services/flow-data-flow-detail.service */ "./src/app/sdk/hr/services/flow-data-flow-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowDataFlowDetailService", function() { return _services_flow_data_flow_detail_service__WEBPACK_IMPORTED_MODULE_75__["FlowDataFlowDetailService"]; });

/* harmony import */ var _services_flow_log_flow_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./services/flow-log-flow.service */ "./src/app/sdk/hr/services/flow-log-flow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowLogFlowService", function() { return _services_flow_log_flow_service__WEBPACK_IMPORTED_MODULE_76__["FlowLogFlowService"]; });

/* harmony import */ var _services_ga_biaya_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./services/ga-biaya.service */ "./src/app/sdk/hr/services/ga-biaya.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaBiayaService", function() { return _services_ga_biaya_service__WEBPACK_IMPORTED_MODULE_77__["GaBiayaService"]; });

/* harmony import */ var _services_ga_biaya_rincian_service__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./services/ga-biaya-rincian.service */ "./src/app/sdk/hr/services/ga-biaya-rincian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaBiayaRincianService", function() { return _services_ga_biaya_rincian_service__WEBPACK_IMPORTED_MODULE_78__["GaBiayaRincianService"]; });

/* harmony import */ var _services_ga_hotel_service__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./services/ga-hotel.service */ "./src/app/sdk/hr/services/ga-hotel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaHotelService", function() { return _services_ga_hotel_service__WEBPACK_IMPORTED_MODULE_79__["GaHotelService"]; });

/* harmony import */ var _services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./services/ga-klaim-item.service */ "./src/app/sdk/hr/services/ga-klaim-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimItemService", function() { return _services_ga_klaim_item_service__WEBPACK_IMPORTED_MODULE_80__["GaKlaimItemService"]; });

/* harmony import */ var _services_ga_klaim_kategori_service__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./services/ga-klaim-kategori.service */ "./src/app/sdk/hr/services/ga-klaim-kategori.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimKategoriService", function() { return _services_ga_klaim_kategori_service__WEBPACK_IMPORTED_MODULE_81__["GaKlaimKategoriService"]; });

/* harmony import */ var _services_ga_klaim_pengajuan_service__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./services/ga-klaim-pengajuan.service */ "./src/app/sdk/hr/services/ga-klaim-pengajuan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimPengajuanService", function() { return _services_ga_klaim_pengajuan_service__WEBPACK_IMPORTED_MODULE_82__["GaKlaimPengajuanService"]; });

/* harmony import */ var _services_ga_klaim_pengaturan_service__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./services/ga-klaim-pengaturan.service */ "./src/app/sdk/hr/services/ga-klaim-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaKlaimPengaturanService", function() { return _services_ga_klaim_pengaturan_service__WEBPACK_IMPORTED_MODULE_83__["GaKlaimPengaturanService"]; });

/* harmony import */ var _services_ga_pembelian_service__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./services/ga-pembelian.service */ "./src/app/sdk/hr/services/ga-pembelian.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaPembelianService", function() { return _services_ga_pembelian_service__WEBPACK_IMPORTED_MODULE_84__["GaPembelianService"]; });

/* harmony import */ var _services_ga_pembelian_item_service__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./services/ga-pembelian-item.service */ "./src/app/sdk/hr/services/ga-pembelian-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaPembelianItemService", function() { return _services_ga_pembelian_item_service__WEBPACK_IMPORTED_MODULE_85__["GaPembelianItemService"]; });

/* harmony import */ var _services_ga_tiket_service__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./services/ga-tiket.service */ "./src/app/sdk/hr/services/ga-tiket.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaTiketService", function() { return _services_ga_tiket_service__WEBPACK_IMPORTED_MODULE_86__["GaTiketService"]; });

/* harmony import */ var _services_ga_transport_service__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./services/ga-transport.service */ "./src/app/sdk/hr/services/ga-transport.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaTransportService", function() { return _services_ga_transport_service__WEBPACK_IMPORTED_MODULE_87__["GaTransportService"]; });

/* harmony import */ var _services_ga_uniform_service__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./services/ga-uniform.service */ "./src/app/sdk/hr/services/ga-uniform.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformService", function() { return _services_ga_uniform_service__WEBPACK_IMPORTED_MODULE_88__["GaUniformService"]; });

/* harmony import */ var _services_ga_uniform_master_service__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./services/ga-uniform-master.service */ "./src/app/sdk/hr/services/ga-uniform-master.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformMasterService", function() { return _services_ga_uniform_master_service__WEBPACK_IMPORTED_MODULE_89__["GaUniformMasterService"]; });

/* harmony import */ var _services_ga_uniform_masterx_service__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./services/ga-uniform-masterx.service */ "./src/app/sdk/hr/services/ga-uniform-masterx.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUniformMasterxService", function() { return _services_ga_uniform_masterx_service__WEBPACK_IMPORTED_MODULE_90__["GaUniformMasterxService"]; });

/* harmony import */ var _services_ga_untuk_service__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./services/ga-untuk.service */ "./src/app/sdk/hr/services/ga-untuk.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaUntukService", function() { return _services_ga_untuk_service__WEBPACK_IMPORTED_MODULE_91__["GaUntukService"]; });

/* harmony import */ var _services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./services/kalender-cuti-kategori.service */ "./src/app/sdk/hr/services/kalender-cuti-kategori.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiKategoriService", function() { return _services_kalender_cuti_kategori_service__WEBPACK_IMPORTED_MODULE_92__["KalenderCutiKategoriService"]; });

/* harmony import */ var _services_kalender_cuti_pengajuan_service__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./services/kalender-cuti-pengajuan.service */ "./src/app/sdk/hr/services/kalender-cuti-pengajuan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengajuanService", function() { return _services_kalender_cuti_pengajuan_service__WEBPACK_IMPORTED_MODULE_93__["KalenderCutiPengajuanService"]; });

/* harmony import */ var _services_kalender_cuti_pengajuan_tanggal_service__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./services/kalender-cuti-pengajuan-tanggal.service */ "./src/app/sdk/hr/services/kalender-cuti-pengajuan-tanggal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengajuanTanggalService", function() { return _services_kalender_cuti_pengajuan_tanggal_service__WEBPACK_IMPORTED_MODULE_94__["KalenderCutiPengajuanTanggalService"]; });

/* harmony import */ var _services_kalender_cuti_pengaturan_service__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./services/kalender-cuti-pengaturan.service */ "./src/app/sdk/hr/services/kalender-cuti-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengaturanService", function() { return _services_kalender_cuti_pengaturan_service__WEBPACK_IMPORTED_MODULE_95__["KalenderCutiPengaturanService"]; });

/* harmony import */ var _services_kalender_cuti_pengaturan_perpegawai_service__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./services/kalender-cuti-pengaturan-perpegawai.service */ "./src/app/sdk/hr/services/kalender-cuti-pengaturan-perpegawai.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderCutiPengaturanPerpegawaiService", function() { return _services_kalender_cuti_pengaturan_perpegawai_service__WEBPACK_IMPORTED_MODULE_96__["KalenderCutiPengaturanPerpegawaiService"]; });

/* harmony import */ var _services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./services/kalender-lembur-pengaturan.service */ "./src/app/sdk/hr/services/kalender-lembur-pengaturan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderLemburPengaturanService", function() { return _services_kalender_lembur_pengaturan_service__WEBPACK_IMPORTED_MODULE_97__["KalenderLemburPengaturanService"]; });

/* harmony import */ var _services_kalender_lembur_service__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./services/kalender-lembur.service */ "./src/app/sdk/hr/services/kalender-lembur.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KalenderLemburService", function() { return _services_kalender_lembur_service__WEBPACK_IMPORTED_MODULE_98__["KalenderLemburService"]; });

/* harmony import */ var _services_payroll_ptkp_service__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./services/payroll-ptkp.service */ "./src/app/sdk/hr/services/payroll-ptkp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPtkpService", function() { return _services_payroll_ptkp_service__WEBPACK_IMPORTED_MODULE_99__["PayrollPtkpService"]; });

/* harmony import */ var _services_payroll_pilot_master_rate_pilot_service__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./services/payroll-pilot-master-rate-pilot.service */ "./src/app/sdk/hr/services/payroll-pilot-master-rate-pilot.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotMasterRatePilotService", function() { return _services_payroll_pilot_master_rate_pilot_service__WEBPACK_IMPORTED_MODULE_100__["PayrollPilotMasterRatePilotService"]; });

/* harmony import */ var _services_payroll_pilot_pekerjaan_service__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./services/payroll-pilot-pekerjaan.service */ "./src/app/sdk/hr/services/payroll-pilot-pekerjaan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotPekerjaanService", function() { return _services_payroll_pilot_pekerjaan_service__WEBPACK_IMPORTED_MODULE_101__["PayrollPilotPekerjaanService"]; });

/* harmony import */ var _services_payroll_pilot_rate_pilot_service__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./services/payroll-pilot-rate-pilot.service */ "./src/app/sdk/hr/services/payroll-pilot-rate-pilot.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayrollPilotRatePilotService", function() { return _services_payroll_pilot_rate_pilot_service__WEBPACK_IMPORTED_MODULE_102__["PayrollPilotRatePilotService"]; });










































































































/***/ })

}]);
//# sourceMappingURL=proyek-proyek-module.js.map