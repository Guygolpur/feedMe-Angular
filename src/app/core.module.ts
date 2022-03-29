import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth.interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
    providers: [
        // The providers array we define all the services we want to provide. Any service we plan on injecting should be provided
        // We can add those services in the providers app.modules.ts or ath the @Injectable({providedIn: 'root'}) of a service file
        ShoppingListService,
        RecipeService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ]
})
export class CoreModule { }