export function Footer() {
  return (
    <footer className="py-12 bg-background border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Hafiz Rafie Aditya
          </p>
        </div>
      </div>
    </footer>
  )
}