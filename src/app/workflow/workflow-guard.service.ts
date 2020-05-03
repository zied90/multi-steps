import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {WorkflowService} from './workflow.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowGuardService implements CanActivate {

  constructor(private router: Router, private workflowService: WorkflowService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let path: string = route.routeConfig.path;

    return this.verifyWorkFlow(path);
  }

  verifyWorkFlow(path): boolean {
    console.log('Entered \'' + path + '\' path.');

    // If any of the previous steps is invalid, go back to the first invalid step
    let firstPath = this.workflowService.getFirstInvalidStep(path);
    console.log('firstPath')
    console.log(firstPath)
    if (firstPath.length > 0) {
      console.log('Redirected to \'' + firstPath + '\' path which it is the first invalid step.');
      let url = `/${firstPath}`;
      this.router.navigate([url]);
      return false;
    }
    ;

    return true;
  }
}
