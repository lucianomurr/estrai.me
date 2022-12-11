import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SignInMobileComponent } from './sign-in-mobile/sign-in-mobile.component';
import { OpenNavService } from './open-nav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div class="relative bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6" [ngClass]="{ hidden: (openNavService.sidenav$ | async) }">
        <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <div>Estrai.me</div>
            </a>
          </div>
          <div class="justify-end -my-2 ">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              (click)="openNavService.updateData(true)"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/bars-3 -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div
        class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition "
        [className]="(openNavService.sidenav$ | async) ? '' : 'hidden'"
      >
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>Estrai.me</div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  (click)="openNavService.updateData(false)"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x-mark -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">How it work</span>
                </a>

                <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <!-- Heroicon name: outline/cursor-arrow-rays -->
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">About</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div>
              <app-sign-in-mobile></app-sign-in-mobile>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``],
  imports: [CommonModule, RouterLink, SignInMobileComponent],
})
export class HeaderComponent {
  constructor(public openNavService: OpenNavService) {}
}
