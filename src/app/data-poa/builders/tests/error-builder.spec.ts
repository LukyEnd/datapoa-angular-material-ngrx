// import { HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
// import { ErrorBuilder } from '../error-builder';

// describe('ErrorBuilder', () => {
//   it('should return a generic error message when status is unknown', () => {
//     const error = {
//       status: 999,
//       error: {},
//       headers: new HttpHeaders(),
//       statusText: 'Unknown Status',
//       url: 'http://localhost:4200/unknown',
//     };

//     const expected =
//       'Erro Desconhecido. Mensagem do Erro: . Desculpe o Transtorno!! Retorne para uma das alternativas Abaixo.';
//     const result = ErrorBuilder.genericError({ ...error });

//     expect(result).toEqual(expected);
//   });

//   it('should build error 401', () => {
//     const errorResponse: HttpErrorResponse = {
//       status: 401,
//       error: {},
//       headers: null,
//       statusText: '',
//       url: '',
//     };

//     const errorMessage = ErrorBuilder.genericError(errorResponse);

//     expect(errorMessage).toContain('Página restrita');
//   });

//   it('should build error 403', () => {
//     const errorResponse: HttpErrorResponse = {
//       status: 403,
//       error: {},
//       headers: null,
//       statusText: '',
//       url: '',
//     };

//     const errorMessage = ErrorBuilder.genericError(errorResponse);

//     expect(errorMessage).toContain('Navegador não tem permissão');
//   });

//   it('should build error 404', () => {
//     const errorResponse: HttpErrorResponse = {
//       status: 404,
//       error: {},
//       headers: null,
//       statusText: '',
//       url: '',
//     };

//     const errorMessage = ErrorBuilder.genericError(errorResponse);

//     expect(errorMessage).toContain('URL digitada, não existe');
//   });

//   it('should build error 500', () => {
//     const errorResponse: HttpErrorResponse = {
//       status: 500,
//       error: {},
//       headers: null,
//       statusText: '',
//       url: '',
//     };

//     const errorMessage = ErrorBuilder.genericError(errorResponse);

//     expect(errorMessage).toContain('Falha interna do servidor');
//   });

//   it('should build unknown error', () => {
//     const errorResponse: HttpErrorResponse = {
//       status: 0,
//       error: {},
//       headers: null,
//       statusText: '',
//       url: '',
//     };

//     const errorMessage = ErrorBuilder.genericError(errorResponse);

//     expect(errorMessage).toContain('Erro Desconhecido');
//   });
// });
