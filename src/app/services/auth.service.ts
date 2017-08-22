import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    lock = new Auth0Lock('28je5TlvWZYfNtMoOYwTcrtKrF9L9kzL', 'manish57.auth0.com', {});
    
    constructor(){
         // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult:any) => {
            this.lock.getUserInfo(authResult.accessToken, function(error:any, profile:any){
                if(error){
                    throw new Error(error);
                }
                // Set Profile
                localStorage.setItem('profile', JSON.stringify(profile));
                // Set Token
                localStorage.setItem('accessToken', authResult.accessToken);
                
            })
        });
    }
    
    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };
    
    public authenticated(){
        return tokenNotExpired();
    }
    
    public logout() {
        // Remove info from localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('profile');
    };
}