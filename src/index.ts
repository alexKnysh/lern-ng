import { IController, IScope } from 'angular';
import * as angular from 'angular';

interface Scope extends IScope {
  id: number;
  name: string;
}

const a = 10;

class MyController implements IController {
  public static $inject = ['$scope'];

  constructor($scope: Scope) {
    $scope.id = 10;
    $scope.name = '32d';
    console.log($scope);
  }
}

angular.module('myApp', []).controller('myCtr', MyController);
